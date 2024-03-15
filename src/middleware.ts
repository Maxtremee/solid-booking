import type { Session, User } from "lucia";

import { appendHeader, getCookie, getHeader, sendRedirect } from "vinxi/http";
import { createMiddleware } from "@solidjs/start/middleware";
import { verifyRequestOrigin } from "lucia";

import { lucia } from "./lib/auth";

export default createMiddleware({
  onRequest: async ({ nativeEvent }) => {
    if (nativeEvent.method !== "GET") {
      const originHeader = getHeader(nativeEvent, "Origin") ?? null;
      const hostHeader = getHeader(nativeEvent, "Host") ?? null;
      if (
        !originHeader ||
        !hostHeader ||
        !verifyRequestOrigin(originHeader, [hostHeader])
      ) {
        nativeEvent.node.res.writeHead(403).end();
        return;
      }
    }

    const sessionId = getCookie(nativeEvent, lucia.sessionCookieName);

    if (!sessionId) {
      nativeEvent.context.session = null;
      nativeEvent.context.user = null;
      return;
    }

    const { session, user } = await lucia.validateSession(sessionId);

    if (session && session.fresh) {
      appendHeader(
        nativeEvent,
        "Set-Cookie",
        lucia.createSessionCookie(session.id).serialize(),
      );
    }

    if (!session) {
      appendHeader(
        nativeEvent,
        "Set-Cookie",
        lucia.createBlankSessionCookie().serialize(),
      );
    }

    nativeEvent.context.session = session;
    nativeEvent.context.user = user;
  },
  // onBeforeResponse: async ({ request, nativeEvent }) => {
  //   if (
  //     new URL(request.url).pathname !== "/login" &&
  //     !nativeEvent.context.user
  //   ) {
  //     return sendRedirect("/login");
  //   }
  // },
});

declare module "vinxi/http" {
  interface H3EventContext {
    session: Session | null;
    user: User | null;
  }
}
