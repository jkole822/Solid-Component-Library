import type { Accessor, Setter } from "solid-js";
import type { AutoCompleteType } from "../Input/types";

export enum SelectSelectionBehaviorEnum {
  Toggle = "toggle",
  Replace = "replace",
}

export enum SelectValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type SelectSelectionBehavior =
  | SelectSelectionBehaviorEnum.Replace
  | SelectSelectionBehaviorEnum.Toggle;

export type SelectValidationState =
  | SelectValidationStateEnum.Valid
  | SelectValidationStateEnum.Invalid;

export interface SelectItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  allowDuplicateSelectionEvents?: boolean;
  allowsEmptyCollection?: boolean;
  ariaLabel?: string;
  autoComplete?: AutoCompleteType;
  className?: string;
  closeOnSelection?: boolean;
  defaultValue?: string;
  description?: string;
  disabled?: boolean;
  disallowEmptySelection?: boolean;
  errorMessage?: string;
  forceMount?: boolean;
  id: string;
  onChange: Setter<SelectItem | SelectItem[] | undefined>;
  options: SelectItem[];
  optionsAccessor?: Accessor<SelectItem[]>;
  modal?: boolean;
  multiple?: boolean;
  name: string;
  placeholder?: string;
  preventScroll?: boolean;
  readOnly?: boolean;
  required?: boolean;
  selectionBehavior?: SelectSelectionBehavior;
  triggerClass?: string;
  useInternalAndExternalValidation?: boolean;
  validationStateAccessor?: Accessor<SelectValidationState>;
  value: Accessor<SelectItem | SelectItem[] | undefined>;
  virtualized?: boolean;
}
