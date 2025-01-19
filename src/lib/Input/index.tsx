// Packages
import { createSignal } from "solid-js";

// Styles
import { ContainerStyles, InputStyles, LabelStyles } from "./styles";

// Types
import { InputTypeEnum } from "./types";
import type { Props } from "./types";

export default function Input({
  className = "",
  id,
  inputClass = "",
  name,
  onChange,
  value,
  type = InputTypeEnum.text,
  ...rest
}: Props) {
  const [receivedFocus, setReceivedFocus] = createSignal(false);

  return (
    <div class={`${className} ${ContainerStyles}`}>
      <input
        {...rest}
        class={`${inputClass} ${InputStyles({ hasValue: !!String(value()), receivedFocus: receivedFocus() })}`}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setReceivedFocus(true)}
        type={type}
        value={value() ?? ""}
      />
      <label class={LabelStyles} for={id}>
        {name}
      </label>
    </div>
  );
}
