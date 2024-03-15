import type { APIEvent } from "@solidjs/start/server";

import { appendHeader, getCookie, getQuery } from "vinxi/http";
import { redirect } from "@solidjs/router";
import { generateId } from "lucia";

import { github, lucia } from "~/lib/auth";
import { users } from "~/db/schema";
import { db } from "~/db";

export async function GET({ nativeEvent }: APIEvent) {
  const storedState = getCookie(nativeEvent, "github_oauth_state") ?? null;
  const query = getQuery(nativeEvent);
  const state = String(query.state);
  const code = String(query.code);

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
      avatar: githubUser.avatar_url,
      username: githubUser.login,
      github_id: githubUser.id,
      email: githubUser.email,
      name: githubUser.name,
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
    if (e instanceof Error) {
      // if (e instanceof OAuth2RequestError) {
      // invalid code
      return redirect(`/500?error=${e.message}`);
    }
    console.error(e);
    return redirect("/500");
  }
}

type GitHubUser = {
  avatar_url: string;
  email: string;
  login: string;
  name: string;
  id: number;
};
