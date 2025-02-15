// Packages
import { Combobox } from "@kobalte/core/combobox";
import {
  createEffect,
  createSignal,
  For,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

// Styles
import {
  CheckContainerStyles,
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
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  LabelStyles,
} from "../Input/styles";

// Types
import {
  ComboBoxValidationState,
  ComboBoxValidationStateEnum,
  Props,
} from "./types";

export default function ComboBox(initialProps: Props) {
  const mergedProps = mergeProps(
    {
      className: "",
      inputClass: "",
      validationState: ComboBoxValidationStateEnum.Valid,
    },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "className",
    "description",
    "errorMessage",
    "id",
    "inputClass",
    "multiple",
    "name",
    "onChange",
    "required",
    "validationState",
    "value",
  ]);

  const [inputValue, setInputValue] = createSignal("");
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validation, setValidation] = createSignal<ComboBoxValidationState>(
    ComboBoxValidationStateEnum.Valid,
  );

  const handleBlur = () => {
    if (!props.multiple) {
      //@ts-ignore
      setInputValue(props.value()?.label ?? "");
    }

    setReceivedFocus(true);
  };

  const handleChange = (
    e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => {
    setInputValue(e.target.value);

    if (!props.multiple && !e.target.value) {
      props.onChange(undefined);
    }
  };

  createEffect(() => {
    if (props.multiple) {
      //@ts-ignore
      if (receivedFocus() && props.required && (!props.value() || props.value()?.length === 0)) {
        setValidation(ComboBoxValidationStateEnum.Invalid);
      } else {
        setValidation(ComboBoxValidationStateEnum.Valid);
      }
    } else {
      if (receivedFocus() && props.required && !props.value()) {
        setValidation(ComboBoxValidationStateEnum.Invalid);
      } else {
        setValidation(ComboBoxValidationStateEnum.Valid);
      }

      //@ts-ignore
      setInputValue(props.value()?.label ?? "");
    }
  });

  const ComboBoxControlContents = () => {
    const isRequired = () => (props.multiple ? false : props.required);

    return (
      <>
        <Combobox.Input
          aria-required={isRequired()}
          class={`${props.inputClass} ${InputStyles({
            hasValue:
              (!props.multiple && !!inputValue()) ||
              (!props.multiple && !!props.value()) ||
              //@ts-ignore
              (props.multiple && props.value()?.length > 0),
            multiple: props.multiple,
            receivedFocus: receivedFocus(),
            validationState: validation(),
          })}`}
          id={props.id}
          name={props.name}
          onBlur={handleBlur}
          onChange={handleChange}
          required={isRequired()}
          value={inputValue()}
        />
        <label class={LabelStyles} for={props.id}>
          {props.name}
        </label>
        <Combobox.Trigger class={TriggerStyles}>
          <Combobox.Icon class={VectorContainerStyles}>
            <i aria-hidden="true" class="fa-solid fa-sort"></i>
          </Combobox.Icon>
        </Combobox.Trigger>
      </>
    );
  };

  return (
    <Combobox
      {...rest}
      multiple={props.multiple}
      onChange={props.onChange}
      //@ts-ignore
      optionDisabled="disabled"
      //@ts-ignore
      optionLabel="label"
      //@ts-ignore
      optionTextValue="label"
      //@ts-ignore
      optionValue="id"
      required={props.required}
      value={props.value()}
      validationState={
        validation() === ComboBoxValidationStateEnum.Valid &&
        props.validationState === ComboBoxValidationStateEnum.Valid
          ? ComboBoxValidationStateEnum.Valid
          : ComboBoxValidationStateEnum.Invalid
      }
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
        when={props.multiple}
        fallback={
          <Combobox.Control class={`${props.className} ${ContainerStyles({})}`}>
            <ComboBoxControlContents />
          </Combobox.Control>
        }
      >
        <Combobox.Control
          class={`${props.className} ${ContainerStyles({
            hasInputValue: !!inputValue(),
            //@ts-ignore
            hasValue: props.value()?.length > 0,
            multiple: props.multiple,
            receivedFocus: receivedFocus(),
            validationState: validation(),
          })}`}
        >
          {(state) => (
            <>
              <div class="flex flex-wrap gap-2.5 w-[calc(100%-5.5rem)]">
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
              <Show when={props.value()?.length > 0}>
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
      <Show when={props.description || props.errorMessage}>
        <div class="mt-2">
          <Show when={props.description}>
            <Combobox.Description class={DescriptionStyles}>
              {props.description}
            </Combobox.Description>
          </Show>
          <Show when={props.errorMessage}>
            <Combobox.ErrorMessage class={ErrorMessageStyles}>
              {props.errorMessage}
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
