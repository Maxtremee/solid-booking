import { cache } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { db } from "~/db";

async function getCurrentUser() {
  "use server";
  const event = getRequestEvent();
  const context = event?.nativeEvent.context;

  if (!context?.user || !context.user.id) {
    return null;
  }

  const [existingUser] = await db.query.users.findMany({
    // @ts-expect-error context.user.id is definitely defined
    where: ({ id }, { eq }) => eq(id, context.user.id),
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  return existingUser;
}

export const getUser = cache(getCurrentUser, "user");
