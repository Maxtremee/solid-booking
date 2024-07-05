import { A, createAsync, RouteDefinition } from "@solidjs/router";
import { For, Match, Show, Suspense, Switch } from "solid-js";
import { Skeleton } from "~/components/ui/skeleton";
import * as Table from "~/components/ui/table";
import { getReservations } from "~/models/reservation";

export const route = {
  load: () => getReservations(),
} satisfies RouteDefinition;

export default function Reservations() {
  const reservations = createAsync(() => getReservations());

  return (
    <section>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Accomodation</Table.Cell>
            <Table.Cell>Check-in</Table.Cell>
            <Table.Cell>Check-out</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Suspense
            fallback={
              <Table.Row>
                <Table.Cell>
                  <Skeleton>Value</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton>Value</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton>Value</Skeleton>
                </Table.Cell>
              </Table.Row>
            }
          >
            <Show when={reservations()}>
              <Switch>
                <Match when={reservations()!.length > 0}>
                  <For each={reservations()}>
                    {(reservation) => (
                      <Table.Row
                        asChild={(props) => (
                          <A
                            {...props()}
                            href={`/reservations/${reservation.accomodationId}`}
                          >
                            <Table.Cell>
                              {reservation.accomodation.name}
                            </Table.Cell>
                            <Table.Cell>{reservation.checkIn}</Table.Cell>
                            <Table.Cell>{reservation.checkOut}</Table.Cell>
                          </A>
                        )}
                      />
                    )}
                  </For>
                </Match>
                <Match when={reservations()!.length < 1}>
                  <Table.Row>
                    <Table.Cell>No reservations found</Table.Cell>
                  </Table.Row>
                </Match>
              </Switch>
            </Show>
          </Suspense>
        </Table.Body>
      </Table.Root>
    </section>
  );
}
