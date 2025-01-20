// Packages
import { createEffect, createSignal, For, Show } from "solid-js";
import { RadioGroup as KobalteRadioGroup } from "@kobalte/core/radio-group";

// Styles
import {
  ContainerStyles,
  GliderContainerStyles,
  GliderStyles,
  InputStyles,
  ItemStyles,
  ItemLabelStyles,
  LabelStyles,
  OptionContainerStyles,
} from "./styles";

// Types
import type { Props } from "./types";
import { RadioGroupOrientationEnum } from "./types";

export default function RadioGroup({
  className = "",
  items,
  label,
  onChange,
  orientation = RadioGroupOrientationEnum.Vertical,
  value,
}: Props) {
  const [valueIndex, setValueIndex] = createSignal<number | undefined>();

  createEffect(() => {
    setValueIndex(items.findIndex((item) => item === value()));
  });

  return (
    <KobalteRadioGroup
      class={`${className} ${ContainerStyles}`}
      onChange={onChange}
      orientation={orientation}
      value={value()}
    >
      <KobalteRadioGroup.Label class={LabelStyles}>
        {label}
      </KobalteRadioGroup.Label>
      <div class={OptionContainerStyles}>
        <div
          role="presentation"
          style={
            RadioGroupOrientationEnum.Horizontal
              ? {
                  height: "100%",
                  "grid-template-columns": items.map((_) => "1fr").join(" "),
                }
              : {}
          }
        >
          <For each={items}>
            {(item) => (
              <KobalteRadioGroup.Item value={item} class={ItemStyles}>
                <KobalteRadioGroup.ItemInput class={InputStyles} />
                <KobalteRadioGroup.ItemControl>
                  <KobalteRadioGroup.ItemIndicator />
                </KobalteRadioGroup.ItemControl>
                <KobalteRadioGroup.ItemLabel class={ItemLabelStyles}>
                  {item}
                </KobalteRadioGroup.ItemLabel>
              </KobalteRadioGroup.Item>
            )}
          </For>
        </div>
        <div class={GliderContainerStyles}>
          <Show when={!!value()}>
            <div
              class={GliderStyles}
              style={{
                height:
                  orientation === RadioGroupOrientationEnum.Vertical
                    ? `${100 / items.length}%`
                    : "100%",
                transform:
                  valueIndex() || valueIndex() === 0
                    ? `translate${orientation === RadioGroupOrientationEnum.Horizontal ? "X" : "Y"}(${valueIndex()! * 100}%)`
                    : "",
                width:
                  orientation === RadioGroupOrientationEnum.Horizontal
                    ? `${100 / items.length}%`
                    : "100%",
              }}
            ></div>
          </Show>
        </div>
      </div>
    </KobalteRadioGroup>
  );
}
