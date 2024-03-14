import type { APIEvent } from "@solidjs/start/server";

import { appendHeader, getCookie, getQuery } from "vinxi/http";
import { OAuth2RequestError } from "arctic";
import { redirect } from "@solidjs/router";
import { generateId } from "lucia";

import { github, lucia } from "~/lib/auth";
import { users } from "~/db/schema";
import { db } from "~/db";

export async function GET({ nativeEvent }: APIEvent) {
  const query = getQuery(nativeEvent);
  const code = String(query.code);
  const state = String(query.state);
  const storedState = getCookie(nativeEvent, "github_oauth_state") ?? null;

  if (!code || !state || !storedState || state !== storedState) {
    return redirect("/500?error=invalid_state");
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubUser = await githubUserResponse.json();

    const [existingUser] = await db.query.users.findMany({
      where: ({ github_id }, { eq }) => eq(github_id, githubUser.id),
    });

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});

      appendHeader(
        nativeEvent,
        "Set-Cookie",
        lucia.createSessionCookie(session.id).serialize(),
      );

      return redirect("/");
    }

    const userId = generateId(15);

    await db.insert(users).values({
      username: githubUser.login,
      github_id: githubUser.id,
      id: userId,
    });

    const session = await lucia.createSession(userId, {});

    appendHeader(
      nativeEvent,
      "Set-Cookie",
      lucia.createSessionCookie(session.id).serialize(),
    );

    return redirect("/");
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return redirect(`/500?error=${e.message}`);
    }
  }
}

type GitHubUser = {
  login: string;
  id: number;
}
