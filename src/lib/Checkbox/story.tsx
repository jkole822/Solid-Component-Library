// Packages
import { createSignal } from "solid-js";

// Components
import Checkbox from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function CheckboxStory({
  checked: _,
  onChange: __,
  ...rest
}: Props) {
  const [checked, setChecked] = createSignal(false);

  return (
    <>
      <Checkbox {...rest} checked={checked} onChange={setChecked} />{" "}
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{checked() ? "Checked" : "Not Checked"}</p>
    </>
  );
}
