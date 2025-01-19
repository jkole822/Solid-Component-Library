// Packages
import { Switch as KobalteSwitch } from "@kobalte/core/switch";

// Styles
import {
  ContainerStyles,
  ControlStyles,
  InputStyles,
  LabelStyles,
  SwitchContainerStyles,
  ThumbStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Switch({
  checked,
  className = "",
  disabled = false,
  label,
  onChange,
}: Props) {
  return (
    <KobalteSwitch
      class={`${className} ${ContainerStyles}`}
      checked={checked()}
      disabled={disabled}
      onChange={onChange}
    >
      <div class={SwitchContainerStyles}>
        <KobalteSwitch.Input class={InputStyles} />
        <KobalteSwitch.Control class={ControlStyles}>
          <KobalteSwitch.Thumb class={ThumbStyles} />
        </KobalteSwitch.Control>
      </div>
      <KobalteSwitch.Label class={LabelStyles}>{label}</KobalteSwitch.Label>
    </KobalteSwitch>
  );
}
