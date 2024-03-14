import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { signIn } from "@auth/solid-start/client";

import { Button } from "~/components/ui/button";
import { db } from "~/db";
import { users } from "~/db/schema";
import { Suspense } from "solid-js";

// const getUsers = async () => {
//   "use server";
//   const res = await db.select().from(users);
//   return res;
// };

export default function Home() {
  // const users = getUsers();
  return (
    <>
      <Title>Home</Title>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Hello world!
        </h1>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </Suspense> */}
        <Button onClick={() => signIn()} variant="solid">
          Sign in
        </Button>
        <p class="mt-8">
          Visit{" "}
          <a
            class="text-sky-600 hover:underline"
            href="https://solidjs.com"
            target="_blank"
          >
            solidjs.com
          </a>{" "}
          to learn how to build Solid apps.
        </p>
        <p class="my-4">
          <span>Home</span>
          {" - "}
          <A class="text-sky-600 hover:underline" href="/about">
            About Page
          </A>{" "}
        </p>
      </main>
    </>
  );
}
