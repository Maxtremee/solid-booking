import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";

export default function LoginPage() {
  return (
    <main class="flex h-screen flex-col items-center justify-center gap-6">
      <Heading as="h1" class="text--size_4xl">
        Solid Booking
      </Heading>
      <A href="/api/login/github" rel="external">
        <Button variant="ghost" as="span">
          Sign in
        </Button>
      </A>
    </main>
  );
}
