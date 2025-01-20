import type { Accessor, Setter } from "solid-js";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export interface Props {
  className?: string;
  items: string[];
  label: string;
  onChange: Setter<string>;
  orientation?: RadioGroupOrientation;
  value: Accessor<string>;
}
