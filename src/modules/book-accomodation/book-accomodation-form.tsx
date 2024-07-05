import { createForm, zodForm } from "@modular-forms/solid";
import { useSubmission } from "@solidjs/router";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { FormLabel } from "~/components/ui/form-label";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { addReservation } from "~/models/reservation";

export const bookSchema = z.object({
  checkIn: z.coerce.date(),
  checkOut: z.coerce.date(),
  name: z.string().trim().min(3),
  // accomodationId: z.string().trim().min(1),
});
export type BookSchema = z.infer<typeof bookSchema>;

export default function BookAccomodationForm(props: {
  accomodationId: string;
}) {
  // const [, { Form, Field }] = createForm<BookSchema>({
  //   validate: zodForm(bookSchema),
  //   initialValues: {
  //     accomodationId: props.accomodationId,
  //     name: props.name,
  //   },
  // });
  const submission = useSubmission(addReservation);

  return (
    <form
      action={addReservation.with(props.accomodationId)}
      method="post"
      class="flex flex-col gap-6"
    >
      <div>
        <FormLabel>Name</FormLabel>
        <Input name="name" type="string" required />
      </div>
      <div>
        <FormLabel>Check in</FormLabel>
        <Input name="checkIn" type="datetime-local" required />
      </div>
      <div>
        <FormLabel>Check out</FormLabel>
        <Input name="checkOut" type="datetime-local" required />
      </div>
      {/* <Field name="name">
        {(field, props) => (
          <div>
            <FormLabel>Name</FormLabel>
            <Input {...props} type="string" required />
            {field.error && <Text class="text-red-600">{field.error}</Text>}
          </div>
        )}
      </Field>
      <Field name="checkIn" type="Date">
        {(field, props) => (
          <div>
            <FormLabel>Check in</FormLabel>
            <Input {...props} type="datetime-local" required />
            {field.error && <Text class="text-red-600">{field.error}</Text>}
          </div>
        )}
      </Field>
      <Field name="checkOut" type="Date">
        {(field, props) => (
          <div>
            <FormLabel>Check out</FormLabel>
            <Input {...props} type="datetime-local" required />
            {field.error && <Text class="text-red-600">{field.error}</Text>}
          </div>
        )}
      </Field> */}
      <Button type="submit" variant="solid" disabled={submission.pending}>
        Book
      </Button>
    </form>
  );
}
