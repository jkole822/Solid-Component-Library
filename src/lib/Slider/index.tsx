// Packages
import { Index, Show } from "solid-js";
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

export default function Slider({
  className,
  description,
  errorMessage,
  name,
  validationStateAccessor,
  validationState,
  value,
  ...rest
}: Props) {
  return (
    <KobalteSlider
      {...rest}
      class={`${className} ${RootStyles}`}
      name={name}
      validationState={
        validationStateAccessor ? validationStateAccessor() : validationState
      }
      value={value()}
    >
      <div class={LabelStyles}>
        <KobalteSlider.Label>{name}</KobalteSlider.Label>
        <KobalteSlider.ValueLabel class={ValueStyles} />
      </div>
      <KobalteSlider.Track class={TrackStyles}>
        <KobalteSlider.Fill class={RangeStyles} />
        <Index each={value()}>
          {(_) => (
            <KobalteSlider.Thumb class={ThumbStyles}>
              <KobalteSlider.Input />
            </KobalteSlider.Thumb>
          )}
        </Index>
      </KobalteSlider.Track>
      <Show when={description || errorMessage}>
        <div class={TextContainerStyles}>
          <Show when={description}>
            <KobalteSlider.Description class={DescriptionStyles}>
              {description}
            </KobalteSlider.Description>
          </Show>
          <Show when={errorMessage}>
            <KobalteSlider.ErrorMessage class={ErrorMessageStyles}>
              {errorMessage}
            </KobalteSlider.ErrorMessage>
          </Show>
        </div>
      </Show>
    </KobalteSlider>
  );
}
