// Packages
import { createSignal } from "solid-js";

// Components
import Progress from ".";

// Types
import type { Props } from "./types";

export default function ProgressStory({
  value: _,
  ...rest
}: Props) {
  const [value, setValue] = createSignal(0);

  const progress = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
  progress(1000).then(() => {
    setValue(100);
  });

  return <Progress {...rest} value={value} />;
}
