// Packages
import { createSignal } from "solid-js";

// Components
import Accordion from ".";

// Types
import type { Props } from "./types";
import { PararaphStyles, SubHeadingStyles } from "../../styles";

export default function AccordionStory({
  value: _,
  onChange: __,
  ...rest
}: Props) {
  const [value, setValue] = createSignal<string[]>([]);

  return (
    <>
      <Accordion {...rest} onChange={setValue} value={value} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
