import type { JSX } from "solid-js";

export interface Props {
  ariaLabel: string;
  buttonContent: JSX.Element;
  children?: JSX.Element;
  className?: string;
  description?: string;
  disabled?: boolean;
  isIconButton?: boolean;
  title?: string;
}
