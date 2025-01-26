import type { Accessor, JSX, Setter } from "solid-js";

interface ContentProps {
  anchorRef?: Accessor<HTMLElement | undefined>
  arrowPadding?: number;
  detachedPadding?: number;
  fitViewport?: boolean;
  flip?: boolean | string;
  getAnchorRect?: (
      anchor?: HTMLElement,
  ) => DOMRect | undefined;
  gutter?: number;
  hideWhenDetached?: boolean;
  overflowPadding?: number;
  overlap?: boolean;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  sameWidth?: boolean;
  shift?: number;
  slide?: boolean;
}

export interface Props {
  ariaLabel?: string;
  buttonContent: JSX.Element;
  children?: JSX.Element;
  className?: string;
  contentClass?: string;
  contentProps?: ContentProps;
  defaultOpen?: boolean;
  description?: string;
  disabled?: boolean;
  forceMount?: boolean;
  id?: string;
  isIconButton?: boolean;
  modal?: boolean;
  open?: Accessor<boolean>;
  onOpenChange?: Setter<boolean>;
  preventScroll?: boolean;
  title?: string;
}
