// Packages
import { Combobox } from "@kobalte/core/combobox";
import { createEffect, createSignal, For, Show } from "solid-js";

// Styles
import {
  CheckContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  ListItemDescriptionStyles,
  ListItemLabelStyles,
  ListItemStyles,
  ListStyles,
  MultiSelectionCloseButtonStyles,
  ScrollContainerStyles,
  SelectionItemCloseButtonStyles,
  SelectionItemStyles,
  TriggerStyles,
  VectorContainerStyles,
} from "./styles";
import { ContainerStyles, InputStyles, LabelStyles } from "../Input/styles";

// Types
import {
  ComboBoxValidationState,
  ComboBoxValidationStateEnum,
  Props,
} from "./types";

export default function ComboBox({
  className = "",
  description,
  errorMessage,
  id,
  inputClass = "",
  multiple,
  name,
  onChange,
  required,
  value,
  ...rest
}: Props) {
  const [inputValue, setInputValue] = createSignal("");
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validationState, setValidationState] =
    createSignal<ComboBoxValidationState>(ComboBoxValidationStateEnum.Valid);

  const handleBlur = () => {
    if (!multiple) {
      //@ts-ignore
      setInputValue(value()?.label ?? "");
    }

    setReceivedFocus(true);
  };

  const handleChange = (
    e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => {
    setInputValue(e.target.value);

    if (!multiple && !e.target.value) {
      onChange(undefined);
    }
  };

  createEffect(() => {
    if (multiple) {
      //@ts-ignore
      if (receivedFocus() && required && (!value() || value()?.length === 0)) {
        setValidationState(ComboBoxValidationStateEnum.Invalid);
      } else {
        setValidationState(ComboBoxValidationStateEnum.Valid);
      }
    } else {
      if (receivedFocus() && required && !value()) {
        setValidationState(ComboBoxValidationStateEnum.Invalid);
      } else {
        setValidationState(ComboBoxValidationStateEnum.Valid);
      }

      //@ts-ignore
      setInputValue(value()?.label ?? "");
    }
  });

  createEffect(() => console.log(value()))

  const ComboBoxControlContents = () => (
    <>
      <Combobox.Input
        aria-required={multiple ? false : required}
        //@ts-ignore
        class={`${inputClass} ${InputStyles({ hasValue: (!multiple && !!inputValue()) || (!multiple && !!value()) || (multiple && value()?.length > 0), multiple, receivedFocus: receivedFocus(), validationState: validationState() })}`}
        id={id}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        required={multiple ? false : required}
        value={inputValue()}
      />
      <label class={LabelStyles} for={id}>
        {name}
      </label>
      <Combobox.Trigger class={TriggerStyles}>
        <Combobox.Icon class={VectorContainerStyles}>
          <i aria-hidden="true" class="fa-solid fa-sort"></i>
        </Combobox.Icon>
      </Combobox.Trigger>
    </>
  );

  return (
    <Combobox
      {...rest}
      multiple={multiple}
      //@ts-ignore
      optionDisabled="disabled"
      //@ts-ignore
      optionLabel="label"
      //@ts-ignore
      optionTextValue="label"
      //@ts-ignore
      optionValue="id"
      onChange={onChange}
      required={required}
      value={value()}
      validationState={validationState()}
      itemComponent={(props) => (
        <Combobox.Item item={props.item} class={ListItemStyles}>
          <Combobox.ItemLabel class={ListItemLabelStyles}>
            {/*@ts-ignore*/}
            {props.item.rawValue.label}
          </Combobox.ItemLabel>
          {/*@ts-ignore*/}
          <Show when={props.item.rawValue.description}>
            <Combobox.ItemDescription class={ListItemDescriptionStyles}>
              {/*@ts-ignore*/}
              {props.item.rawValue.description}
            </Combobox.ItemDescription>
          </Show>
          <Combobox.ItemIndicator class={CheckContainerStyles}>
            <i aria-hidden="true" class="fa-solid fa-check"></i>
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Show
        when={multiple}
        fallback={
          <Combobox.Control class={`${className} ${ContainerStyles({})}`}>
            <ComboBoxControlContents />
          </Combobox.Control>
        }
      >
        <Combobox.Control
          //@ts-ignore
          class={`${className} ${ContainerStyles({ hasInputValue: !!inputValue(), hasValue: value()?.length > 0, multiple, receivedFocus: receivedFocus(), validationState: validationState() })}`}
        >
          {(state) => (
            <>
              <div class="flex gap-2.5 flex-wrap w-[calc(100%-5.5rem)]">
                <For each={state.selectedOptions()}>
                  {(option) => (
                    <span
                      class={SelectionItemStyles}
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      {/*@ts-ignore*/}
                      <span>{option.label}</span>
                      <button
                        class={SelectionItemCloseButtonStyles}
                        onClick={() => state.remove(option)}
                      >
                        <i aria-hidden="true" class="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                  )}
                </For>
              </div>
              {/*@ts-ignore*/}
              <Show when={value()?.length > 0}>
                <button
                  class={MultiSelectionCloseButtonStyles}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={state.clear}
                >
                  <i aria-hidden="true" class="fa-solid fa-xmark"></i>
                </button>
              </Show>
              <ComboBoxControlContents />
            </>
          )}
        </Combobox.Control>
      </Show>
      <Show when={description || errorMessage}>
        <div class="mt-2">
          <Show when={description}>
            <Combobox.Description class={DescriptionStyles}>
              {description}
            </Combobox.Description>
          </Show>
          <Show when={errorMessage}>
            <Combobox.ErrorMessage class={ErrorMessageStyles}>
              {errorMessage}
            </Combobox.ErrorMessage>
          </Show>
        </div>
      </Show>
      <Combobox.Portal>
        <Combobox.Content class={ScrollContainerStyles}>
          <Combobox.Listbox class={ListStyles} />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox>
  );
}
