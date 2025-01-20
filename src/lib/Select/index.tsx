// Packages
import { createSignal, Show } from "solid-js";
import { Select as KobalteSelect } from "@kobalte/core/select";

// Styles
import {
  CheckContainerStyles,
  ContainerStyles,
  ContentStyles,
  ItemStyles,
  LabelStyles,
  MenuStyles,
  TriggerStyles,
  VectorContainerStyles,
} from "./styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props } from "./types";

export default function Select({
  ariaLabel,
  autoComplete = AutoCompleteEnum.off,
  className = "",
  id,
  name,
  options,
  optionsAccessor,
  triggerClass = "",
  value,
  ...rest
}: Props) {
  const [open, setOpen] = createSignal(false);

  return (
    <KobalteSelect
      {...rest}
      open={open()}
      options={optionsAccessor ? optionsAccessor() : options}
      onOpenChange={setOpen}
      name={name}
      itemComponent={(props) => (
        <KobalteSelect.Item item={props.item} class={ItemStyles}>
          <KobalteSelect.ItemLabel>
            {/*@ts-ignore*/}
            {props.item.rawValue}
          </KobalteSelect.ItemLabel>
          <KobalteSelect.ItemIndicator
            class={CheckContainerStyles({
              isSelected: props.item.rawValue === value(),
            })}
          >
            <i aria-hidden="true" class="fa-solid fa-check"></i>
          </KobalteSelect.ItemIndicator>
        </KobalteSelect.Item>
      )}
    >
      <div class={`${triggerClass} ${ContainerStyles}`}>
        <Show when={name}>
          <label class={LabelStyles} for={id}>
            {name}
          </label>
        </Show>
        <KobalteSelect.Trigger
          class={TriggerStyles}
          aria-label={ariaLabel}
          id={id}
        >
          <KobalteSelect.Value>
            {/*@ts-ignore*/}
            {(state) => state.selectedOption()}
          </KobalteSelect.Value>
          <KobalteSelect.Icon class={VectorContainerStyles({ isOpen: open() })}>
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
