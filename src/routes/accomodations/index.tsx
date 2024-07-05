import { RouteDefinition, createAsync, A } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import * as Card from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { getAccomodations } from "~/models/accomodation";

export const route = {
  load: () => getAccomodations(),
} satisfies RouteDefinition;

export default function Accomodations() {
  const accomodations = createAsync(() => getAccomodations());

  return (
    <div class="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2">
      <Suspense
        fallback={
          <Card.Root>
            <Card.Header>
              <Card.Title>
                <Skeleton>Text</Skeleton>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Skeleton>Text</Skeleton>
            </Card.Body>
            <Card.Footer>
              <Skeleton>Text</Skeleton>
            </Card.Footer>
          </Card.Root>
        }
      >
        <Show when={accomodations()}>
          <For each={accomodations()}>
            {(accomodation) => (
              <A href={`/accomodations/${accomodation.id}`}>
                <Card.Root>
                  <Card.Header>
                    <Card.Title>{accomodation.name}</Card.Title>
                  </Card.Header>
                  <Card.Body>{accomodation.description}</Card.Body>
                  <Card.Footer>${accomodation.price}</Card.Footer>
                </Card.Root>
              </A>
            )}
          </For>
        </Show>
      </Suspense>
    </div>
  );
}
