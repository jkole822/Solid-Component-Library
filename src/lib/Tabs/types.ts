import type { JSX } from "solid-js";

export enum TabsOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type TabsOrientation =
  | TabsOrientationEnum.Horizontal
  | TabsOrientationEnum.Vertical;

export interface TabItem {
  children: JSX.Element;
  disabled?: boolean;
  id: string;
  label: string;
}

export interface Props {
  ariaLabel: string;
  className?: string;
  defaultValue: string;
  items: TabItem[];
  orientation: TabsOrientation;
}
