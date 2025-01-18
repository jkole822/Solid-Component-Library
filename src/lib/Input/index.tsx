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
  return (
    <div class={`${className} ${ContainerStyles}`}>
      <input
        {...rest}
        class={`${inputClass} ${InputStyles({ hasValue: !!String(value()) })}`}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        value={value()}
      />
      <label class={LabelStyles} for={id}>
        {name}
      </label>
    </div>
  );
}
