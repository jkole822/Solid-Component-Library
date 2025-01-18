import type { Accessor, Setter } from "solid-js";

export interface Props {
  checked: Accessor<boolean>;
  className?: string;
  disabled?: boolean;
  label: string;
  onChange: Setter<boolean>;
}
