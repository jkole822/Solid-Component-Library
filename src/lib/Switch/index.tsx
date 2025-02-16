// Packages
import { Switch as KobalteSwitch } from "@kobalte/core/switch";
import { mergeProps, Show, splitProps } from "solid-js";

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

export default function Switch(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "checked",
    "className",
    "description",
    "errorMessage",
    "name",
  ]);

  return (
    <KobalteSwitch
      {...rest}
      checked={props.checked()}
      class={ContainerStyles}
      name={props.name}
    >
      <div class={FlexContainerStyles}>
        <div class={SwitchContainerStyles}>
          <KobalteSwitch.Input class={InputStyles} />
          <KobalteSwitch.Control class={ControlStyles}>
            <KobalteSwitch.Thumb class={ThumbStyles} />
          </KobalteSwitch.Control>
        </div>
        <KobalteSwitch.Label class={LabelStyles}>
          {props.name}
        </KobalteSwitch.Label>
      </div>
      <Show when={props.description || props.errorMessage}>
        <div class={TextContainerStyles}>
          <Show when={props.description}>
            <KobalteSwitch.Description class={DescriptionStyles}>
              {props.description}
            </KobalteSwitch.Description>
          </Show>
          <Show when={props.errorMessage}>
            <KobalteSwitch.ErrorMessage class={ErrorMessageStyles}>
              {props.errorMessage}
            </KobalteSwitch.ErrorMessage>
          </Show>
        </div>
      </Show>
    </KobalteSwitch>
  );
}
