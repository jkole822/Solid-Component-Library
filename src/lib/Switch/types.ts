import type { Accessor, Setter } from "solid-js";

export enum SwitchValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type SwitchValidationState =
  | SwitchValidationStateEnum.Invalid
  | SwitchValidationStateEnum.Valid;

export interface Props {
  checked: Accessor<boolean>;
  className?: string;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  name: string;
  onChange: Setter<boolean>;
  readOnly?: boolean;
  required?: boolean;
  validationState: SwitchValidationState;
  value?: string;
}
