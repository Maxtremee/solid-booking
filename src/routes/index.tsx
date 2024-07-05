import { createAsync } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { Heading } from "~/components/ui/heading";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";
import { getUser } from "~/models/user";

export default function Home() {
  const user = createAsync(() => getUser());
  return (
    <div>
      <Heading as="h1" size="3xl">
        Welcome,
      </Heading>
      <Suspense fallback={<Skeleton>Name</Skeleton>}>
        <Text size="2xl">{user()?.name}</Text>
      </Suspense>
    </div>
  );
}
