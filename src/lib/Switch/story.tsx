// Packages
import { createSignal } from "solid-js";

// Components
import Switch from ".";

// Types
import type { Props } from "./types";

export default function SwitchStory(props: Props) {
  const [checked, setChecked] = createSignal(props.defaultChecked ?? false);

  return <Switch {...props} checked={checked} onChange={setChecked} />;
}
