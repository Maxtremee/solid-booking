import {
  A,
  RouteDefinition,
  RouteSectionProps,
  createAsync,
} from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";
import { getAccomodation } from "~/models/accomodation";

export const route = {
  load({ params }) {
    void getAccomodation(params.id);
  },
} satisfies RouteDefinition;

export default function Accomodation(props: RouteSectionProps) {
  const accomodation = createAsync(() => getAccomodation(props.params.id));

  return (
    <section class="pt-6">
      <Suspense
        fallback={
          <>
            <Heading as="h1" size="6xl" class="pb-2">
              <Skeleton>Name</Skeleton>
            </Heading>
            <Heading as="h2" class="pb-4 text-xl" size="xl">
              <Skeleton>Price</Skeleton>
            </Heading>
            <Text>
              <Skeleton>Description</Skeleton>
            </Text>
          </>
        }
      >
        <Show when={accomodation()}>
          <Heading as="h1" size="6xl" class="pb-2">
            {accomodation()!.name}
          </Heading>
          <Heading as="h2" class="pb-4 text-xl">
            ${accomodation()!.price}
          </Heading>
          <Text class="pb-4">{accomodation()!.description}</Text>
          <div class="flex justify-end">
            <A href={`/accomodations/${accomodation()!.id}/book`}>
              <Button variant="solid">Book now</Button>
            </A>
          </div>
        </Show>
      </Suspense>
    </section>
  );
}
