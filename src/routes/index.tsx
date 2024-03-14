import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      <Title>Home</Title>
      <main class="text-center mx-auto text-gray-700 p-4">
        <A
          class="text-sky-600 hover:underline"
          href="/api/login/github"
          rel="external"
        >
          <Button variant="solid" as="span">
            Sign in
          </Button>
        </A>
      </main>
    </>
  );
}
