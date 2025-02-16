// Packages
import {
  createEffect,
  createSignal,
  For,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
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
import { DescriptionStyles, ErrorMessageStyles } from "../Input/styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props, SelectValidationState } from "./types";
import { SelectValidationStateEnum } from "./types";

export default function Select(initialProps: Props) {
  const mergedProps = mergeProps(
    {
      autoComplete: AutoCompleteEnum.off,
      className: "",
      triggerClass: "",
      validationState: SelectValidationStateEnum.Valid,
    },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "ariaLabel",
    "autoComplete",
    "className",
    "description",
    "errorMessage",
    "id",
    "multiple",
    "name",
    "required",
    "triggerClass",
    "validationState",
    "value",
  ]);

  const [open, setOpen] = createSignal(false);
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validation, setValidation] = createSignal<SelectValidationState>(
    SelectValidationStateEnum.Valid,
  );

  const derivedValidationState = () =>
    validation() === SelectValidationStateEnum.Valid &&
    props.validationState === SelectValidationStateEnum.Valid
      ? SelectValidationStateEnum.Valid
      : SelectValidationStateEnum.Invalid;

  const handleOpenChange = (value: boolean) => {
    if (!value) {
      setReceivedFocus(true);
    }

    setOpen(value);
  };

  createEffect(() => {
    if (props.multiple) {
      //@ts-ignore
      if (receivedFocus() && props.required && (!props.value() || props.value()?.length === 0)) {
        setValidation(SelectValidationStateEnum.Invalid);
      } else {
        setValidation(SelectValidationStateEnum.Valid);
      }
    } else {
      if (receivedFocus() && props.required && !props.value()) {
        setValidation(SelectValidationStateEnum.Invalid);
      } else {
        setValidation(SelectValidationStateEnum.Valid);
      }
    }
  });

  return (
    <KobalteSelect
      {...rest}
      class={props.className}
      multiple={props.multiple}
      //@ts-ignore
      optionDisabled="disabled"
      //@ts-ignore
      optionLabel="label"
      //@ts-ignore
      optionTextValue="label"
      //@ts-ignore
      optionValue="id"
      open={open()}
      onOpenChange={handleOpenChange}
      name={props.name}
      required={props.required}
      value={props.value()}
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
      <KobalteSelect.HiddenSelect id={props.id} />
      <div class={`${props.triggerClass} ${ContainerStyles}`}>
        <label class={LabelStyles} for={props.id}>
          {props.name}
        </label>
        <KobalteSelect.Trigger
          aria-label={props.ariaLabel}
          class={TriggerStyles({
            receivedFocus: receivedFocus(),
            validationState: validation(),
          })}
        >
          <Show
            when={props.multiple}
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
                  <Show when={props.value()?.length > 0}>
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
      <Show when={props.description || props.errorMessage}>
        <div class="mt-2">
          <Show when={props.description}>
            <KobalteSelect.Description class={DescriptionStyles}>
              {props.description}
            </KobalteSelect.Description>
          </Show>
          <Show when={props.errorMessage}>
            <KobalteSelect.ErrorMessage class={ErrorMessageStyles}>
              {props.errorMessage}
            </KobalteSelect.ErrorMessage>
          </Show>
        </div>
      </Show>
      <KobalteSelect.Portal>
        <KobalteSelect.Content class={ContentStyles}>
          <KobalteSelect.Listbox class={MenuStyles} />
        </KobalteSelect.Content>
      </KobalteSelect.Portal>
    </KobalteSelect>
  );
}
