import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/heading";

export default function LoginPage() {
  return (
    <div class="flex h-screen flex-col items-center justify-center gap-6">
      <Heading as="h1" class="text--size_4xl">
        Solid Booking
      </Heading>
      <Button
        variant="ghost"
        asChild={(props) => (
          <A {...props()} href="/api/login/github" rel="external">
            Sign in
          </A>
        )}
      />
    </div>
  );
}
