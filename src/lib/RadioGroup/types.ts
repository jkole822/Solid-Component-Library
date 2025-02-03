import type { Accessor, Setter } from "solid-js";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export enum RadioGroupValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type RadioGroupValidationState =
  | RadioGroupValidationStateEnum.Invalid
  | RadioGroupValidationStateEnum.Valid;

export interface Props {
  className?: string;
  defaultValue?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  items: string[];
  name: string;
  onChange: Setter<string>;
  orientation?: RadioGroupOrientation;
  readOnly?: boolean;
  required?: boolean;
  validationStateAccessor?: Accessor<RadioGroupValidationState>;
  validationState?: RadioGroupValidationState;
  value: Accessor<string>;
}
