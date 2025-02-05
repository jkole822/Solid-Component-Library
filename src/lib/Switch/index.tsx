// Packages
import { Switch as KobalteSwitch } from "@kobalte/core/switch";
import { Show } from "solid-js";

// Styles
import {
  ContainerStyles,
  ControlStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  FlexContainerStyles,
  InputStyles,
  LabelStyles,
  SwitchContainerStyles,
  TextContainerStyles,
  ThumbStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Switch({
  checked,
  className = "",
  description,
  errorMessage,
  name,
  validationStateAccessor,
  validationState,
  ...rest
}: Props) {
  return (
    <KobalteSwitch
      {...rest}
      checked={checked()}
      class={ContainerStyles}
      name={name}
      validationState={
        validationStateAccessor ? validationStateAccessor() : validationState
      }
    >
      <div class={FlexContainerStyles}>
        <div class={SwitchContainerStyles}>
          <KobalteSwitch.Input class={InputStyles} />
          <KobalteSwitch.Control class={ControlStyles}>
            <KobalteSwitch.Thumb class={ThumbStyles} />
          </KobalteSwitch.Control>
        </div>
        <KobalteSwitch.Label class={LabelStyles}>{name}</KobalteSwitch.Label>
      </div>
      <Show when={description || errorMessage}>
        <div class={TextContainerStyles}>
          <Show when={description}>
            <KobalteSwitch.Description class={DescriptionStyles}>
              {description}
            </KobalteSwitch.Description>
          </Show>
          <Show when={errorMessage}>
            <KobalteSwitch.ErrorMessage class={ErrorMessageStyles}>
              {errorMessage}
            </KobalteSwitch.ErrorMessage>
          </Show>
        </div>
      </Show>
    </KobalteSwitch>
  );
}
