// Packages
import { createEffect, createSignal, For, Show } from "solid-js";
import { Select as KobalteSelect } from "@kobalte/core/select";

// Styles
import {
  CheckContainerStyles,
  ContainerStyles,
  ContentStyles,
  LabelStyles,
  MenuStyles,
  TriggerStyles,
  VectorContainerStyles,
} from "./styles";
import {
  ListItemDescriptionStyles,
  ListItemLabelStyles,
  ListItemStyles,
  MultiSelectionCloseButtonStyles,
  SelectionItemCloseButtonStyles,
  SelectionItemStyles,
} from "../ComboBox/styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props, SelectValidationState } from "./types";
import { SelectValidationStateEnum } from "./types";

export default function Select({
  ariaLabel,
  autoComplete = AutoCompleteEnum.off,
  className = "",
  description,
  errorMessage,
  id,
  multiple,
  name,
  options,
  optionsAccessor,
  required,
  triggerClass = "",
  useInternalAndExternalValidation,
  validationStateAccessor,
  value,
  ...rest
}: Props) {
  const [open, setOpen] = createSignal(false);
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validationState, setValidationState] =
    createSignal<SelectValidationState>(SelectValidationStateEnum.Valid);

  const derivedValidationState = () =>
    useInternalAndExternalValidation &&
    validationStateAccessor &&
    validationStateAccessor() === SelectValidationStateEnum.Valid
      ? SelectValidationStateEnum.Valid
      : validationStateAccessor
        ? validationStateAccessor()
        : validationState();

  const handleOpenChange = (value: boolean) => {
    if (!value) {
      setReceivedFocus(true);
    }

    setOpen(value);
  };

  createEffect(() => {
    if (multiple) {
      //@ts-ignore
      if (receivedFocus() && required && (!value() || value()?.length === 0)) {
        setValidationState(SelectValidationStateEnum.Invalid);
      } else {
        setValidationState(SelectValidationStateEnum.Valid);
      }
    } else {
      if (receivedFocus() && required && !value()) {
        setValidationState(SelectValidationStateEnum.Invalid);
      } else {
        setValidationState(SelectValidationStateEnum.Valid);
      }
    }
  });

  return (
    <KobalteSelect
      {...rest}
      class={className}
      multiple={multiple}
      //@ts-ignore
      optionDisabled="disabled"
      //@ts-ignore
      optionLabel="label"
      //@ts-ignore
      optionTextValue="label"
      //@ts-ignore
      optionValue="id"
      open={open()}
      options={optionsAccessor ? optionsAccessor() : options}
      onOpenChange={handleOpenChange}
      name={name}
      required={required}
      value={value()}
      validationState={derivedValidationState()}
      itemComponent={(props) => (
        <KobalteSelect.Item item={props.item} class={ListItemStyles}>
          <KobalteSelect.ItemLabel class={ListItemLabelStyles}>
            {/*@ts-ignore*/}
            {props.item.rawValue.label}
          </KobalteSelect.ItemLabel>
          {/*@ts-ignore*/}
          <Show when={props.item.rawValue.description}>
            <KobalteSelect.ItemDescription class={ListItemDescriptionStyles}>
              {/*@ts-ignore*/}
              {props.item.rawValue.description}
            </KobalteSelect.ItemDescription>
          </Show>
          <KobalteSelect.ItemIndicator class={CheckContainerStyles}>
            <i aria-hidden="true" class="fa-solid fa-check"></i>
          </KobalteSelect.ItemIndicator>
        </KobalteSelect.Item>
      )}
    >
      <KobalteSelect.HiddenSelect id={id} />
      <div class={`${triggerClass} ${ContainerStyles}`}>
        <label class={LabelStyles} for={id}>
          {name}
        </label>
        <KobalteSelect.Trigger
          aria-label={ariaLabel}
          class={TriggerStyles({
            receivedFocus: receivedFocus(),
            validationState: validationState(),
          })}
        >
          <Show
            when={multiple}
            fallback={
              <KobalteSelect.Value>
                {/*@ts-ignore*/}
                {(state) => state.selectedOption()}
              </KobalteSelect.Value>
            }
          >
            <KobalteSelect.Value>
              {(state) => (
                <>
                  <div class="flex gap-2.5 flex-wrap">
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
                </>
              )}
            </KobalteSelect.Value>
          </Show>
          <KobalteSelect.Icon
            class={VectorContainerStyles({
              isOpen: open(),
              receivedFocus: receivedFocus(),
              validationState: derivedValidationState(),
            })}
          >
            <i aria-hidden="true" class="fa-solid fa-chevron-up"></i>
          </KobalteSelect.Icon>
        </KobalteSelect.Trigger>
      </div>
      <KobalteSelect.Portal>
        <KobalteSelect.Content class={ContentStyles}>
          <KobalteSelect.Listbox class={MenuStyles} />
        </KobalteSelect.Content>
      </KobalteSelect.Portal>
    </KobalteSelect>
  );
}
