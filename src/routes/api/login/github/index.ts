import { redirect } from "@solidjs/router";
import { setCookie } from "vinxi/http";
import { generateState } from "arctic";

import { github } from "~/lib/auth";

export async function GET() {
  const state = generateState();
  const url = await github.createAuthorizationURL(state);

  setCookie("github_oauth_state", state, {
    secure: process.env.ENV === "production",
    maxAge: 60 * 10,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
  });

  return redirect(url.toString());
}
