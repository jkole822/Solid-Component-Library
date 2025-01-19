// Packages
import { createSignal, Show } from "solid-js";

// Components
import Slider from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function SliderStory({
  defaultValue,
  value: _,
  onChange: __,
  ...rest
}: Props) {
  const [value, setValue] = createSignal(defaultValue);

  return (
    <>
      <Slider
        {...rest}
        defaultValue={defaultValue}
        onChange={setValue}
        value={value}
      />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>
        <span>{value()[0]}</span>
        <Show when={value()[1]}>
          <span>, {value()[1]}</span>
        </Show>
      </p>
    </>
  );
}
