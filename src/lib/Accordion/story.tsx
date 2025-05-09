// Packages
import { createSignal } from "solid-js";

// Components
import Accordion from ".";

// Types
import type { Props } from "./types";
import { PararaphStyles, SubHeadingStyles } from "../../styles";

export default function AccordionStory(props: Props) {
  const [value, setValue] = createSignal<string[]>(props.defaultValue ?? []);

  return (
    <>
      <Accordion {...props} onChange={setValue} value={value} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
