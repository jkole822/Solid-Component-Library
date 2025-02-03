import type { Accessor } from "solid-js";

export interface Props {
  className?: string;
  getLabelValue?: (params: {
    value: number;
    min: number;
    max: number;
  }) => string;
  indeterminate?: boolean;
  label: string;
  maxValue?: number;
  minValue?: number;
  value: Accessor<number>;
}
