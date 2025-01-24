// Packages
import { createSignal } from "solid-js";

// Styles
import { ContainerStyles, InputStyles, LabelStyles } from "./styles";

import type { Props } from "./types";
// Types
import { InputTypeEnum } from "./types";

export default function Input({
  className = "",
  id,
  inputClass = "",
  name,
  onChange,
  type = InputTypeEnum.text,
  value,
  ...rest
}: Props) {
  const [receivedFocus, setReceivedFocus] = createSignal(false);

  return (
    <div class={`${className} ${ContainerStyles({})}`}>
      <input
        {...rest}
        class={`${inputClass} ${InputStyles({ hasValue: !!value() || value() === 0, receivedFocus: receivedFocus() })}`}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setReceivedFocus(true)}
        type={type}
        value={value() ?? undefined}
      />
      <label class={LabelStyles} for={id}>
        {name}
      </label>
    </div>
  );
}
