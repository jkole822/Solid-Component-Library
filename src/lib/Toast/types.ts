import type { Accessor } from "solid-js";
import type { ToastComponentProps } from "@kobalte/core/toast";

export interface Toast {
  id: string;
  value: number;
}

export interface ToastUpdate {
  description: string;
  id: string;
  title: string;
}

export interface ToastInstanceProps {
  toastComponentProps: ToastComponentProps;
  toastUpdate: ToastUpdate;
}

export interface Props {
  toastUpdates: Accessor<ToastUpdate[]>;
}
