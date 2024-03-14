import { useSearchParams } from "@solidjs/router";
import { Show } from "solid-js";

import { Heading } from "~/components/ui/heading";

export default function Error() {
  const [params] = useSearchParams();
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Error
      </h1>
      <Show when={params.error}>
        <Heading as="h2">{params.error}</Heading>
      </Show>
    </main>
  );
}
