import type { JSX } from "solid-js";

export interface Props {
  children: JSX.Element;
  className?: string;
  text: string;
  triggerClass?: string;
}
