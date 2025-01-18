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

export default function RadioGroup({
  className = "",
  items,
  label,
  onChange,
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
      value={value()}
    >
      <KobalteRadioGroup.Label class={LabelStyles}>
        {label}
      </KobalteRadioGroup.Label>
      <div class={OptionContainerStyles}>
        <div role="presentation">
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
                height: `${100 / items.length}%`,
                transform:
                  valueIndex() || valueIndex() === 0
                    ? `translateY(${valueIndex()! * 100}%)`
                    : "",
              }}
            ></div>
          </Show>
        </div>
      </div>
    </KobalteRadioGroup>
  );
}
