// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";

// Components
import Collapsible from ".";

// Types
import type { Props } from "./types";

export default function CollapsibleStory(props: Props) {
  const [open, setOpen] = createSignal(false);

  return (
    <Collapsible {...props} open={open} onOpenChange={setOpen}>
      <span>{faker.lorem.words(3)}</span>
      <hr class="border-b-px border-neutral-secondary-700" />
      <span>{faker.lorem.words(2)}</span>
      <hr class="border-b-px border-neutral-secondary-700" />
      <span>{faker.lorem.words(4)}</span>
    </Collapsible>
  );
}
