// Packages
import { createSignal } from "solid-js";

// Components
import Checkbox from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function CheckboxStory(props: Props) {
  const [checked, setChecked] = createSignal(props.defaultChecked ?? false);

  return (
    <>
      <Checkbox {...props} checked={checked} onChange={setChecked} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{checked() ? "Checked" : "Not Checked"}</p>
    </>
  );
}
