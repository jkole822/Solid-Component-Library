// Packages
import { createEffect, createSignal, For, Show } from "solid-js";
import { RadioGroup as KobalteRadioGroup } from "@kobalte/core/radio-group";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
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
  description,
  errorMessage,
  items,
  name,
  onChange,
  orientation = RadioGroupOrientationEnum.Vertical,
  validationStateAccessor,
  validationState,
  value,
  ...rest
}: Props) {
  const [valueIndex, setValueIndex] = createSignal<number | undefined>();

  createEffect(() => {
    setValueIndex(items.findIndex((item) => item === value()));
  });

  return (
    <KobalteRadioGroup
      {...rest}
      class={`${className} ${ContainerStyles}`}
      onChange={onChange}
      name={name}
      orientation={orientation}
      validationState={
        validationStateAccessor ? validationStateAccessor() : validationState
      }
      value={value()}
    >
      <KobalteRadioGroup.Label class={LabelStyles}>
        {name}
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
      <Show when={description}>
        <KobalteRadioGroup.Description class={DescriptionStyles}>
          {description}
        </KobalteRadioGroup.Description>
      </Show>
      <Show when={errorMessage}>
        <KobalteRadioGroup.ErrorMessage class={ErrorMessageStyles}>
          {errorMessage}
        </KobalteRadioGroup.ErrorMessage>
      </Show>
    </KobalteRadioGroup>
  );
}
