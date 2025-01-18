import type { Accessor } from "solid-js";

export interface Props {
  className?: string;
  label: string;
  value: Accessor<number>;
}
