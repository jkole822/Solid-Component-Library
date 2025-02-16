// Packages
import {
  createEffect,
  createSignal,
  For,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
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
import type { Props, RadioGroupOrientation } from "./types";
import { RadioGroupOrientationEnum } from "./types";

export default function RadioGroup(initialProps: Props) {
  const mergedProps = mergeProps(
    { className: "", orientation: RadioGroupOrientationEnum.Vertical },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "className",
    "description",
    "errorMessage",
    "items",
    "name",
    "onChange",
    "orientation",
    "value",
  ]);
  const [valueIndex, setValueIndex] = createSignal<number | undefined>();
  const distance = (orientation: RadioGroupOrientation) =>
    props.orientation === orientation ? `${100 / props.items.length}%` : "100%";

  createEffect(() => {
    setValueIndex(props.items.findIndex((item) => item === props.value()));
  });

  return (
    <KobalteRadioGroup
      {...rest}
      class={`${props.className} ${ContainerStyles}`}
      onChange={props.onChange}
      name={props.name}
      orientation={props.orientation}
      value={props.value()}
    >
      <KobalteRadioGroup.Label class={LabelStyles}>
        {props.name}
      </KobalteRadioGroup.Label>
      <div class={OptionContainerStyles}>
        <div
          role="presentation"
          style={
            RadioGroupOrientationEnum.Horizontal
              ? {
                  height: "100%",
                  "grid-template-columns": props.items
                    .map((_) => "1fr")
                    .join(" "),
                }
              : {}
          }
        >
          <For each={props.items}>
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
          <Show when={!!props.value()}>
            <div
              class={GliderStyles}
              style={{
                height: distance(RadioGroupOrientationEnum.Vertical),
                transform:
                  valueIndex() || valueIndex() === 0
                    ? `translate${props.orientation === RadioGroupOrientationEnum.Horizontal ? "X" : "Y"}(${valueIndex()! * 100}%)`
                    : "",
                width: distance(RadioGroupOrientationEnum.Horizontal),
              }}
            ></div>
          </Show>
        </div>
      </div>
      <Show when={props.description}>
        <KobalteRadioGroup.Description class={DescriptionStyles}>
          {props.description}
        </KobalteRadioGroup.Description>
      </Show>
      <Show when={props.errorMessage}>
        <KobalteRadioGroup.ErrorMessage class={ErrorMessageStyles}>
          {props.errorMessage}
        </KobalteRadioGroup.ErrorMessage>
      </Show>
    </KobalteRadioGroup>
  );
}
