import { Checkbox as KobalteCheckbox } from "@kobalte/core/checkbox";

// Styles
import {
  ContainerStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Checkbox({
  checked,
  className = "",
  disabled = false,
  label,
  onChange,
}: Props) {
  return (
    <div class={`${className} w-fit`}>
      <KobalteCheckbox
        checked={checked()}
        class={ContainerStyles({ disabled })}
        disabled={disabled}
        onChange={onChange}
      >
        <KobalteCheckbox.Input class={InputStyles} />
        <KobalteCheckbox.Control>
          <svg
            class={VectorStyles}
            viewBox="0 0 64 64"
            height="2em"
            width="2em"
          >
            <path
              class={PathStyles}
              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
              pathLength="575.0541381835938"
            ></path>
          </svg>
        </KobalteCheckbox.Control>
        <KobalteCheckbox.Label class={LabelStyles}>
          {label}
        </KobalteCheckbox.Label>
      </KobalteCheckbox>
    </div>
  );
}
