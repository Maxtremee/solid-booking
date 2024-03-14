import type { Session, User } from "lucia";

import {
  appendHeader,
  sendRedirect,
  getCookie,
  getHeader,
  setCookie,
} from "vinxi/http";
import { createMiddleware } from "@solidjs/start/middleware";
import { verifyRequestOrigin } from "lucia";
import crypto from "crypto";

import { lucia } from "./lib/auth";

// //@ts-expect-error
// global.crypto = crypto;

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
  //   console.log(request.url, nativeEvent.context.user);
  //   if (
  //     new URL(request.url).pathname.startsWith("/dashboard") &&
  //     !nativeEvent.context.user
  //   ) {
  //     return sendRedirect("/");
  //   }
  // },
});

declare module "vinxi/http" {
  type H3EventContext = {
    session: Session | null;
    user: User | null;
  };
}
