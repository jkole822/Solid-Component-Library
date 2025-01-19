import type { Accessor, Setter } from "solid-js";

export enum AutoCompleteEnum {
  name = "name",
  email = "email",
  currentPassword = "current-password",
  newPassword = "new-password",
  off = "off",
  username = "username",
}

export type AutoCompleteType =
  | AutoCompleteEnum.name
  | AutoCompleteEnum.email
  | AutoCompleteEnum.currentPassword
  | AutoCompleteEnum.newPassword
  | AutoCompleteEnum.off
  | AutoCompleteEnum.username;

export enum InputTypeEnum {
  date = "date",
  email = "email",
  number = "number",
  password = "password",
  text = "text",
}

export type InputType =
  | InputTypeEnum.date
  | InputTypeEnum.email
  | InputTypeEnum.number
  | InputTypeEnum.password
  | InputTypeEnum.text;

export interface Props {
  autoComplete?: AutoCompleteType;
  className?: string;
  disabled?: boolean;
  id: string;
  inputClass?: string;
  name: string;
  max?: number;
  min?: number;
  onChange: Setter<number | string | null>;
  onClear?: () => void;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
  value: Accessor<number | string | null>;
}
