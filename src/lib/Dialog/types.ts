import type { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  cancelButtonText?: string;
  children: JSX.Element;
  className?: string;
  defaultOpen?: boolean;
  description?: string;
  forceMount?: boolean;
  id: string;
  onOpenChange: Setter<boolean>;
  onSubmit?: () => void;
  modal?: boolean;
  open: Accessor<boolean>;
  preventScroll?: boolean;
  submitButtonText?: string;
  title?: string;
  trigger?: JSX.Element;
}
