import { useSearchParams } from "@solidjs/router";
import { Show } from "solid-js";

import { Heading } from "~/components/ui/heading";

export default function Error() {
  const [params] = useSearchParams();
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <Heading as="h1">Error</Heading>
      <Show when={params.error}>
        <Heading as="h2">{params.error}</Heading>
      </Show>
    </main>
  );
}
