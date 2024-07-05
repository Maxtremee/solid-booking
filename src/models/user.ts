import { cache, redirect } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import { db } from "~/db";

export const getUser = cache(async () => {
  "use server";
  const event = getRequestEvent();
  const context = event?.nativeEvent.context;

  if (!context?.user?.id) {
    return redirect("/login");
  }

  const existingUser = await db.query.users.findFirst({
    where: ({ id }, { eq }) => eq(id, context.user!.id),
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  return existingUser;
}, "user");
