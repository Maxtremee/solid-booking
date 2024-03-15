import type { APIEvent } from "@solidjs/start/server";

import { appendHeader, sendRedirect, getCookie, setCookie } from "vinxi/http";

import { lucia } from "~/lib/auth";

export async function GET({ nativeEvent }: APIEvent) {
  const sessionId = getCookie(nativeEvent, lucia.sessionCookieName) ?? null;

  if (!sessionId) {
    // if no session just return to home page
    return sendRedirect("/login");
  }

  await lucia.invalidateSession(sessionId);

  appendHeader(
    nativeEvent,
    "Set-Cookie",
    lucia.createBlankSessionCookie().serialize(),
  );

  return sendRedirect("/login");
}
