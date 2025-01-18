// Packages
import { Index } from "solid-js";
import { Slider as KobalteSlider } from "@kobalte/core/slider";

// Slider
import {
  LabelStyles,
  RangeStyles,
  RootStyles,
  ThumbStyles,
  TrackStyles,
  ValueStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Slider({ className, label, value, ...rest }: Props) {
  return (
    <KobalteSlider {...rest} class={`${className} ${RootStyles}`} value={value()}>
      <div class={LabelStyles}>
        <KobalteSlider.Label>{label}</KobalteSlider.Label>
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
    </KobalteSlider>
  );
}
