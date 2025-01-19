// Packages
import { Combobox } from "@kobalte/core/combobox";
import { createSignal } from "solid-js";

// Styles
import {
  CheckContainerStyles,
  ListItemStyles,
  ListItemValueStyles,
  ListStyles,
  ScrollContainerStyles,
  TriggerStyles,
  VectorContainerStyles,
} from "./styles";
import { ContainerStyles, InputStyles, LabelStyles } from "../Input/styles";

// Types
import { InputTypeEnum } from "../Input/types";
import type { Props } from "./types";

export default function ComboBox({
  className = "",
  disabled,
  id,
  inputClass = "",
  name,
  onChange,
  onClear,
  options,
  placeholder,
  required,
  value,
  type = InputTypeEnum.text,
}: Props) {
  const [inputValue, setInputValue] = createSignal("");
  const [receivedFocus, setReceivedFocus] = createSignal(false);

  const handleInput = ({
    target: { value },
  }: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }) => {
    setInputValue(value);
    if (!value) onClear();
  };

  return (
    <Combobox
      disabled={disabled}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      required={required}
      value={value()}
      itemComponent={(props) => (
        <Combobox.Item item={props.item} class={ListItemStyles}>
          <Combobox.ItemLabel class={ListItemValueStyles}>
            {props.item.rawValue}
          </Combobox.ItemLabel>
          <Combobox.ItemIndicator class={CheckContainerStyles}>
            <i aria-hidden="true" class="fa-solid fa-check"></i>
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Combobox.Control
        class={`${className} ${ContainerStyles}`}
        aria-label={name}
      >
        <Combobox.Input
          class={`${inputClass} ${InputStyles({ hasValue: !!inputValue() || !!value(), receivedFocus: receivedFocus() })}`}
          id={id}
          onChange={handleInput}
          onFocus={() => setReceivedFocus(true)}
          type={type}
          value={value() ?? ""}
        />
        <label class={LabelStyles} for={id}>
          {name}
        </label>
        <Combobox.Trigger class={TriggerStyles}>
          <Combobox.Icon class={VectorContainerStyles}>
            <i aria-hidden="true" class="fa-solid fa-sort"></i>
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content class={ScrollContainerStyles}>
          <Combobox.Listbox class={ListStyles} />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox>
  );
}
