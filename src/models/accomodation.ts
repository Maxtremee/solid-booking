import { cache, redirect } from "@solidjs/router";
import { db } from "~/db";

export const getAccomodations = cache(() => {
  "use server";
  return db.query.accomodations.findMany();
}, "accomodations");

export const getAccomodation = cache(async (id: string) => {
  "use server";
  const res = await db.query.accomodations.findFirst({
    where: ({ id: accomodationId }, { eq }) => eq(accomodationId, id),
  });
  if (!res) {
    return redirect("/404", {
      status: 404,
    });
  }
  return res;
}, "accomodation");
