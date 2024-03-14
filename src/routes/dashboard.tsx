import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function Dashboard() {
  return (
    <main class="flex flex-col items-center">
      <Text>Dashboard</Text>
      <A class="text-sky-600 hover:underline" href="/api/logout" rel="external">
        <Button variant="solid" as="span">
          Sign out
        </Button>
      </A>
    </main>
  );
}
