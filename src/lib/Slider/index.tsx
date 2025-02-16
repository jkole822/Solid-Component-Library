// Packages
import { Index, mergeProps, Show, splitProps } from "solid-js";
import { Slider as KobalteSlider } from "@kobalte/core/slider";

// Slider
import {
  DescriptionStyles,
  ErrorMessageStyles,
  LabelStyles,
  RangeStyles,
  RootStyles,
  TextContainerStyles,
  ThumbStyles,
  TrackStyles,
  ValueStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Slider(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "className",
    "description",
    "errorMessage",
    "name",
    "value",
  ]);

  return (
    <KobalteSlider
      {...rest}
      class={`${props.className} ${RootStyles}`}
      name={props.name}
      value={props.value()}
    >
      <div class={LabelStyles}>
        <KobalteSlider.Label>{props.name}</KobalteSlider.Label>
        <KobalteSlider.ValueLabel class={ValueStyles} />
      </div>
      <KobalteSlider.Track class={TrackStyles}>
        <KobalteSlider.Fill class={RangeStyles} />
        <Index each={props.value()}>
          {(_) => (
            <KobalteSlider.Thumb class={ThumbStyles}>
              <KobalteSlider.Input />
            </KobalteSlider.Thumb>
          )}
        </Index>
      </KobalteSlider.Track>
      <Show when={props.description || props.errorMessage}>
        <div class={TextContainerStyles}>
          <Show when={props.description}>
            <KobalteSlider.Description class={DescriptionStyles}>
              {props.description}
            </KobalteSlider.Description>
          </Show>
          <Show when={props.errorMessage}>
            <KobalteSlider.ErrorMessage class={ErrorMessageStyles}>
              {props.errorMessage}
            </KobalteSlider.ErrorMessage>
          </Show>
        </div>
      </Show>
    </KobalteSlider>
  );
}
