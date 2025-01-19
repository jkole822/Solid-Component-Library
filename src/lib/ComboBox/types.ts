import type { Props as InputProps } from "../Input/types";

export interface Props extends InputProps {
  onClear: () => void;
  options: string[];
}
