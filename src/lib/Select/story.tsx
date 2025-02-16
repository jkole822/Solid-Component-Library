// Packages
import { createSignal, For, Show } from "solid-js";

// Components
import Select from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props, SelectItem } from "./types";

export default function SelectStory(props: Props) {
  const [value, setValue] = createSignal<
    SelectItem | SelectItem[] | undefined
  >(props.defaultValue);

  const BindingCheck = ({
    label,
    description,
  }: {
    label?: string;
    description?: string;
  }) => (
    <>
      {/*@ts-ignore*/}
      <p class={PararaphStyles}>Label: {label ?? value()?.label ?? ""}</p>
      <p class={PararaphStyles}>
        {/*@ts-ignore*/}
        Description: {description ?? value()?.description ?? ""}
      </p>
    </>
  );

  return (
    <>
      <Select {...props} onChange={setValue} value={value} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <Show when={Array.isArray(value())} fallback={<BindingCheck />}>
        {/*@ts-ignore*/}
        <For each={value()}>
          {(item) => (
            <BindingCheck label={item.label} description={item.description} />
          )}
        </For>
      </Show>
    </>
  );
}
