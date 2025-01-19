// Packages
import { createSignal } from "solid-js";

// Components
import Switch from ".";

// Types
import type { Props } from "./types";

export default function SwitchStory({
  checked: _,
  onChange: __,
  ...rest
}: Props) {
  const [checked, setChecked] = createSignal(false);

  return <Switch {...rest} checked={checked} onChange={setChecked} />;
}
