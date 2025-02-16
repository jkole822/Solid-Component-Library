// Packages
import { createSignal, onCleanup, onMount } from "solid-js";

// Components
import Progress from ".";

// Types
import type { Props } from "./types";

export default function ProgressStory(props: Props) {
  const [value, setValue] = createSignal(0);

  let frame: number;
  onMount(() => {
    const updatePercentage = () => {
      if (value() === 100) return;
      setValue(value() + 1);
      frame = requestAnimationFrame(updatePercentage);
    };

    frame = requestAnimationFrame(updatePercentage);
  });

  onCleanup(() => cancelAnimationFrame(frame));

  return <Progress {...props} value={value} />;
}
