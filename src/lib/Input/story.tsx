// Packages
import { createSignal } from "solid-js";

// Components
import Input from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function InputStory({ value: _, onChange: __, ...rest }: Props) {
  const [value, setValue] = createSignal<number | string | null>("");

  return (
    <>
      <Input {...rest} onChange={setValue} value={value} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
