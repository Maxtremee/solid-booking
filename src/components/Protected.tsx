import type { Session } from "@auth/core/types";
import type { Component} from "solid-js";

import { createServerData$, redirect } from "solid-start/server";
import { getSession } from "@auth/solid-start";
import { useRouteData } from "solid-start";
import { Show } from "solid-js";

import { authOpts } from "~/auth";

const Protected = (Comp: IProtectedComponent) => {
  const routeData = () => {
    return createServerData$(
      async (_, event) => {
        const session = await getSession(event.request, authOpts);
        if (!session?.user) {
          throw redirect("/");
        }
        return session;
      },
      { key: () => ["auth_user"] },
    );
  };

  return {
    Page: () => {
      const session = useRouteData<typeof routeData>();
      return (
        <Show when={session()} keyed>
          {(sess) => <Comp {...sess} />}
        </Show>
      );
    },
    routeData,
  };
};

type IProtectedComponent = Component<Session>;

export default Protected;
