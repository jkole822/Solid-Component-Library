// Packages
import { Checkbox as KobalteCheckbox } from "@kobalte/core/checkbox";
import { mergeProps, Show, splitProps } from "solid-js";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  FlexContainerStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Checkbox(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "checked",
    "className",
    "description",
    "errorMessage",
    "name",
  ]);

  const rootProps = () => ({
    ...rest,
    ...(props.checked !== undefined ? { checked: props.checked() } : {}),
    class: ContainerStyles,
    name: props.name,
  });

  return (
    <div class={`${props.className} w-fit`}>
      <KobalteCheckbox {...rootProps()}>
        <div class={FlexContainerStyles}>
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
            {props.name}
          </KobalteCheckbox.Label>
        </div>
        <Show when={props.description}>
          <KobalteCheckbox.Description class={DescriptionStyles}>
            {props.description}
          </KobalteCheckbox.Description>
        </Show>
        <Show when={props.errorMessage}>
          <KobalteCheckbox.ErrorMessage class={ErrorMessageStyles}>
            {props.errorMessage}
          </KobalteCheckbox.ErrorMessage>
        </Show>
      </KobalteCheckbox>
    </div>
  );
}
