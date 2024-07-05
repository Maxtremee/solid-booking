// @refresh reload
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Show, Suspense } from "solid-js";

import Nav from "~/components/Nav";

import "./app.css";
import "@park-ui/tailwind-plugin/preset.css";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Suspense>
              <Show when={props.location.pathname !== "/login"}>
                <Nav />
              </Show>
              <main class="mx-auto max-w-3xl px-4">{props.children}</main>
            </Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
