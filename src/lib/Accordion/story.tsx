// Packages
import { createEffect, createSignal } from "solid-js";

// Components
import Accordion from ".";

// Types
import type { Props } from "./types";
import { PararaphStyles, SubHeadingStyles } from "../../styles";

export default function AccordionStory(props: Props) {
  const [stateValue, setStateValue] = createSignal<string[] | undefined>();

  createEffect(() => {
    if (props.value && props.value.length > 0) {
      setStateValue(props.value);
    }
  });

  return (
    <>
      <Accordion {...props} onChange={setStateValue} value={stateValue} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{stateValue()}</p>
    </>
  );
}
