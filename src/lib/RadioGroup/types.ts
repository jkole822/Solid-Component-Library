import type { Accessor, Setter } from "solid-js";

export interface Props {
  className?: string;
  items: string[];
  label: string;
  onChange: Setter<string>;
  value: Accessor<string>;
}
