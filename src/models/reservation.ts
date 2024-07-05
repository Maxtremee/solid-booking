import { action, cache, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { db } from "~/db";
import { reservations } from "~/db/schema";
import {
  BookSchema,
  bookSchema,
} from "~/modules/book-accomodation/book-accomodation-form";

export const getReservations = cache(async () => {
  "use server";
  const event = getRequestEvent();
  const context = event?.nativeEvent.context;

  if (!context?.user?.id) {
    return redirect("/login");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await db.query.reservations.findMany({
    where: ({ userId: id }, { eq }) => eq(id, context.user!.id),
    with: {
      accomodation: {
        columns: {
          name: true,
          id: true,
        },
      },
    },
  });
}, "reservations");

export const getReservation = cache(async (id: string) => {
  "use server";
  const event = getRequestEvent();
  const context = event?.nativeEvent.context;

  if (!context?.user?.id) {
    return redirect("/login");
  }

  const res = await db.query.reservations.findFirst({
    where: ({ id: reservationId }, { eq }) => eq(reservationId, id),
    with: {
      accomodation: true,
    },
  });

  if (!res || res.userId !== context.user.id) {
    return redirect("/404", {
      status: 404,
    });
  }

  return res;
}, "reservation");

export const addReservation = action(async (id: string, data: FormData) => {
  "use server";
  const event = getRequestEvent();
  const context = event?.nativeEvent.context;

  if (!context?.user?.id) {
    return redirect("/login");
  }

  console.log(data);

  const booking = bookSchema.safeParse({
    ...Object.fromEntries(data.entries()),
    accomodationId: id,
  });
  if (!booking.success) {
    return "Invalid data";
  }

  const [res] = await db
    .insert(reservations)
    .values([
      {
        accomodationId: id,
        checkIn: new Date(booking.data.checkIn).toISOString(),
        checkOut: new Date(booking.data.checkOut).toISOString(),
        userId: context.user.id,
      },
    ])
    .returning();
  console.log(res);

  return redirect(`/reservations`);
  // return redirect(`/reservations/${res.id}`);
}, "addReservation");
