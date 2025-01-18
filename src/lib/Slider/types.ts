import type { Accessor, Setter } from "solid-js";

export interface Props {
  className?: string;
  defaultValue: number[];
  label: string;
  maxValue: number;
  minValue: number;
  onChange: Setter<number[]>;
  step: number;
  value: Accessor<number[]>;
}
