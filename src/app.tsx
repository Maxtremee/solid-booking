// @refresh reload
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";

import Nav from "~/components/Nav";

import "./app.css";
import "@park-ui/tailwind-plugin/preset.css";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
