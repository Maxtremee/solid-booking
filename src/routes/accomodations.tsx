import * as Card from "~/components/ui/card";

export default function Accomodations() {
  return (
    <main class="mx-auto grid max-w-3xl gap-4 p-4 sm:grid-cols-1 md:grid-cols-2">
      <Card.Root>
        <Card.Header>
          <Card.Title>Sarbinowo</Card.Title>
        </Card.Header>
        <Card.Body>zdjęcia</Card.Body>
        <Card.Footer>footer</Card.Footer>
      </Card.Root>
    </main>
  );
}
