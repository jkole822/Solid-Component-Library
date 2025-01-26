import type { ImageProps } from "../../types";
import type {
  FocusOutsideEvent,
  InteractOutsideEvent,
  PointerDownOutsideEvent,
} from "@kobalte/core";

export enum NavigationMenuOrientationEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export type NavigationMenuOrientation =
  | NavigationMenuOrientationEnum.Horizontal
  | NavigationMenuOrientationEnum.Vertical;

export interface NavigationMenuItem {
  closeOnSelect?: boolean;
  description?: string;
  disabled?: boolean;
  href: string;
  image?: ImageProps;
  onSelect?: () => void;
  textValue?: string;
  title: string;
}

export interface NavigationMenuMenu {
  disabled?: boolean;
  href?: string
  items: NavigationMenuItem[];
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  title: string;
}

interface ArrowProps {
  size?: number;
}

interface ContentProps {
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onFocusOutside?: (event: FocusOutsideEvent) => void;
  onInteractOutside?: (event: InteractOutsideEvent) => void;
  onOpenAutoFocus?: (event: Event) => void;
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
}

interface ItemIndicatorProps {
  forceMount?: boolean;
}

interface MenuProps {
  arrowPadding?: number;
  detachedPadding?: number;
  fitViewport?: boolean;
  flip?: boolean | string;
  forceMount?: boolean;
  gutter?: number;
  hideWhenDetached?: boolean;
  id?: string;
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  overflowPadding?: number;
  overlap?: boolean;
  placement?: string;
  preventScroll?: boolean;
  sameWidth?: boolean;
  shift?: number;
  slide?: boolean;
  value?: string;
}

interface ViewportProps {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onFocusOutside?: (event: FocusOutsideEvent) => void;
  onInteractOutside?: (event: InteractOutsideEvent) => void;
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
}

export interface Props {
  arrowProps?: ArrowProps;
  className?: string;
  contentProps?: ContentProps;
  defaultValue?: string;
  delayDuration?: number;
  focusOnAlt?: boolean;
  forceMount?: boolean;
  itemIndicatorProps: ItemIndicatorProps;
  items: NavigationMenuMenu[];
  loop?: boolean;
  menuProps?: MenuProps;
  onValueChange?: (value: string | undefined | null) => void;
  orientation?: NavigationMenuOrientation;
  skipDelayDuration: number;
  viewportProps?: ViewportProps;
}
