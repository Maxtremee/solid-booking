import { RouteSectionProps } from "@solidjs/router";
import { Show } from "solid-js";

import { Heading } from "~/components/ui/heading";

export default function Error(props: RouteSectionProps) {
  return (
    <div class="text-center">
      <Heading as="h1" size="xl">
        Error
      </Heading>
      <Show when={props.location.query?.error}>
        <Heading as="h2">{props.location.query.error}</Heading>
      </Show>
    </div>
  );
}
