import { cache } from "@solidjs/router";
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
  return res ?? null;
}, `accomodation`);
