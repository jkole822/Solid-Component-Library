import type { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  cancelButtonText?: string;
  className?: string;
  description?: string;
  dialogContent: JSX.Element;
  id: number | string;
  onOpenChange: Setter<boolean>;
  onSubmit?: () => void;
  open: Accessor<boolean>;
  submitButtonText?: string;
  title?: string;
  trigger?: JSX.Element;
}
