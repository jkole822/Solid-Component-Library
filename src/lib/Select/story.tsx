// Packages
import { createSignal } from "solid-js";

// Components
import Select from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function SelectStory({
  value: _,
  onChange: __,
  ...rest
}: Props) {
  const [value, setValue] = createSignal("");

  return (
    <>
      <Select {...rest} onChange={setValue} value={value} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
