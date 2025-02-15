import type { Accessor, Setter } from "solid-js";

export enum CheckboxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type CheckboxValidationState =
  | CheckboxValidationStateEnum.Invalid
  | CheckboxValidationStateEnum.Valid;

export interface Props {
  checked?: Accessor<boolean | undefined>;
  className?: string;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  name: string;
  onChange?: Setter<boolean | undefined>;
  readOnly?: boolean;
  required?: boolean;
  validationState: CheckboxValidationState;
  value?: string;
}
