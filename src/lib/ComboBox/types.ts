import { Accessor, JSX, Setter } from "solid-js";

export enum ComboBoxSelectionBehaviorEnum {
  Toggle = "toggle",
  Replace = "replace",
}

export enum ComboBoxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export enum ComboBoxTriggerModeEnum {
  Input = "input",
  Focus = "focus",
  Manual = "manual",
}

export type ComboBoxSelectionBehavior =
  | ComboBoxSelectionBehaviorEnum.Replace
  | ComboBoxSelectionBehaviorEnum.Toggle;

export type ComboBoxTriggerMode =
  | ComboBoxTriggerModeEnum.Focus
  | ComboBoxTriggerModeEnum.Input
  | ComboBoxTriggerModeEnum.Manual;

export type ComboBoxValidationState =
  | ComboBoxValidationStateEnum.Valid
  | ComboBoxValidationStateEnum.Invalid;

export interface ComboBoxItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  allowDuplicateSelectionEvents?: boolean;
  allowsEmptyCollection?: boolean;
  className?: string;
  closeOnSelection?: boolean;
  defaultValue?: string | string[];
  description?: string;
  disabled?: boolean;
  disallowEmptySelection?: boolean;
  errorMessage?: string;
  forceMount?: boolean;
  id: string;
  inputClass?: string;
  modal?: boolean;
  multiple?: boolean;
  name: string;
  noResetInputOnBlur?: boolean;
  onChange: Setter<ComboBoxItem | ComboBoxItem[] | undefined>;
  options: ComboBoxItem[];
  placeholder?: JSX.Element;
  preventScroll?: boolean;
  readOnly?: boolean;
  removeOnBackspace?: boolean;
  required?: boolean;
  selectionBehavior?: ComboBoxSelectionBehavior;
  triggerMode?: ComboBoxTriggerMode;
  useInternalAndExternalValidation?: boolean;
  validationStateAccessor?: Accessor<ComboBoxValidationState>;
  value: Accessor<ComboBoxItem | ComboBoxItem[] | undefined>;
  virtualized?: boolean;
}
