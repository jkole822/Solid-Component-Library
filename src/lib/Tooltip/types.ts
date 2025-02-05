import type { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  children: JSX.Element;
  className?: string;
  closeDelay?: number;
  defaultOpen?: boolean;
  forceMount?: boolean;
  id?: string;
  ignoreSafeArea?: boolean;
  onOpenChange?: Setter<boolean>;
  open?: Accessor<boolean>;
  openDelay?: number;
  skipDelayDuration?: number;
  text: string;
  triggerClass?: string;
  triggerOnFocusOnly?: boolean;
}
