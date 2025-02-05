import type { Accessor, JSX, Setter } from "solid-js";

export enum TabsActivationModeEnum {
  Automatic = "automatic",
  Manual = "manual",
}

export type TabsActivationMode =
  | TabsActivationModeEnum.Automatic
  | TabsActivationModeEnum.Manual;

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
  activationMode?: TabsActivationMode;
  ariaLabel: string;
  className?: string;
  defaultValue: string;
  disabled?: boolean;
  items: TabItem[];
  onChange?: Setter<string>;
  orientation: TabsOrientation;
  value?: Accessor<string>;
}
