// Packages
import { createSignal } from "solid-js";

// Components
import ComboBox from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function ComboBoxStory({
  value: _,
  onChange: __,
  ...rest
}: Props) {
  const [value, setValue] = createSignal<string | null>(null);

  const handleClear = () => {
    setValue(null);
  };

  return (
    <>
      <ComboBox
        {...rest}
        onChange={setValue}
        onClear={handleClear}
        value={value}
      />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
