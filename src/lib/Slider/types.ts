import type { Accessor, Setter } from "solid-js";

export enum SliderOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type SliderOrientation =
    | SliderOrientationEnum.Horizontal
    | SliderOrientationEnum.Vertical;

export enum SliderValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type SliderValidationState =
    | SliderValidationStateEnum.Invalid
    | SliderValidationStateEnum.Valid;

export interface Props {
  className?: string;
  defaultValue: number[];
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  getValueLabel?: (params: any) => string;
  inverted?: boolean;
  maxValue: number;
  minStepsBetweenThumbs?: number;
  minValue: number;
  name: string;
  onChange: Setter<number[]>;
  onChangeEnd: (value: number[]) => void;
  orientation?: SliderOrientation;
  readOnly?: boolean;
  required?: boolean;
  step: number;
  validationState?: SliderValidationState;
  validationStateAccessor?: Accessor<SliderValidationState>;
  value: Accessor<number[]>;
}
