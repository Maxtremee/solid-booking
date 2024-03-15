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
  load({ location }) {
    void getAccomodation(location.pathname.split("/")[2]);
  },
} satisfies RouteDefinition;

export default function Accomodation(props: RouteSectionProps) {
  const accomodation = createAsync(() =>
    getAccomodation(props.location.pathname.split("/")[2]),
  );

  return (
    <Suspense
      fallback={
        <section class="pt-6">
          <Heading as="h1" size="6xl">
            <Skeleton>Name</Skeleton>
          </Heading>
          <Heading as="h2" class="pt-2 text-xl" size="xl">
            <Skeleton>Price</Skeleton>
          </Heading>
          <Text class="pt-4">
            <Skeleton>Description</Skeleton>
          </Text>
        </section>
      }
    >
      <Show when={accomodation()}>
        <section class="pt-6">
          <Heading as="h1" size="6xl">
            {accomodation()!.name}
          </Heading>
          <Heading as="h2" class="pt-2 text-xl">
            ${accomodation()!.price}
          </Heading>
          <Text class="pt-4">{accomodation()!.description}</Text>
          <div class="flex justify-end pt-4">
            <A href={`/accomodations/${accomodation()!.id}/book`}>
              <Button as="span" variant="solid">
                Book now
              </Button>
            </A>
          </div>
        </section>
      </Show>
    </Suspense>
  );
}
