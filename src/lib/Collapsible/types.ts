import type { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  buttonContent: JSX.Element;
  children: JSX.Element;
  className?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  forceMount?: boolean;
  onOpenChange?: Setter<boolean>;
  open?: Accessor<boolean>;
}
