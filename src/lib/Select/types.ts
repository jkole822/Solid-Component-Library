import type { Accessor, Setter } from "solid-js";
import { AutoCompleteType } from "../Input/types";

export interface Props {
  ariaLabel?: string;
  autoComplete?: AutoCompleteType;
  className?: string;
  defaultValue?: string
  disabled?: boolean;
  id: string;
  onChange: Setter<string>
  options: string[];
  optionsAccessor?: Accessor<string[]>
  name?: string;
  placeholder?: string;
  required?: boolean;
  triggerClass?: string;
  value: Accessor<string>;
}
