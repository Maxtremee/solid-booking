import {
  createAsync,
  RouteDefinition,
  RouteSectionProps,
} from "@solidjs/router";
import { BiSolidPin } from "solid-icons/bi";
import { Show, Suspense } from "solid-js";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { getAccomodation } from "~/models/accomodation";
import BookAccomodationForm from "~/modules/book-accomodation/book-accomodation-form";

export const route = {
  load({ params }) {
    void getAccomodation(params.id);
  },
} satisfies RouteDefinition;

export default function Book(props: RouteSectionProps) {
  const accomodation = createAsync(() => getAccomodation(props.params.id));

  return (
    <div>
      <Suspense fallback={<BiSolidPin />}>
        <Show when={accomodation()}>
          <Heading as="h1" size="6xl" class="pb-2">
            {accomodation()!.name}
          </Heading>
          <Heading as="h2" class="pb-4 text-xl">
            ${accomodation()!.price}
          </Heading>
          <Text class="pb-4">{accomodation()!.description}</Text>
          <BookAccomodationForm accomodationId={accomodation()!.id} />
        </Show>
      </Suspense>
    </div>
  );
}
