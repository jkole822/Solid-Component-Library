// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";

// Components
import Checkbox from ".";

// Types
import type { Props } from "./types";

export default function CheckboxStory({
  open: _,
  onOpenChange: __,
  ...rest
}: Props) {
  const [open, setOpen] = createSignal(false);

  return (
    <Checkbox {...rest} open={open} onOpenChange={setOpen}>
      <span>{faker.lorem.words(3)}</span>
      <hr class="border-b-px border-neutral-secondary-700" />
      <span>{faker.lorem.words(2)}</span>
      <hr class="border-b-px border-neutral-secondary-700" />
      <span>{faker.lorem.words(4)}</span>
    </Checkbox>
  );
}
