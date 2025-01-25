import type { Accessor, JSX } from "solid-js";

export enum ButtonVariantsEnum {
  fill = "fill",
  lineOne = "lineOne",
  lineTwo = "lineTwo",
  outline = "outline",
}

export type ButtonVariants =
  | ButtonVariantsEnum.fill
  | ButtonVariantsEnum.lineOne
  | ButtonVariantsEnum.lineTwo
  | ButtonVariantsEnum.outline;

export interface Props {
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?:
    | boolean
    | "dialog"
    | "menu"
    | "grid"
    | "listbox"
    | "tree"
    | "false"
    | "true"
    | undefined;
  ariaHidden?: boolean;
  ariaLabel?: string;
  children: JSX.Element;
  className?: string;
  disabled?: boolean;
  disabledAccessor?: Accessor<boolean>;
  href?: string;
  id?: number | string;
  onClick?: () => void;
  showBottomGlow?: boolean;
  tabIndex?: number;
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariants;
}
