import type { JSX } from "solid-js";

export interface Props {
  ariaLabel?: string;
  buttonContent: JSX.Element;
  children?: JSX.Element;
  className?: string;
  defaultOpen?: boolean;
  description?: string;
  disabled?: boolean;
  forceMount?: boolean;
  id?: string;
  isIconButton?: boolean;
  modal?: boolean;
  preventScroll?: boolean;
  title?: string;
}
