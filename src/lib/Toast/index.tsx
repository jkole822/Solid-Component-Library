// Packages
import { createEffect, createSignal } from "solid-js";
import { Portal } from "solid-js/web";
import { Toast as KobalteToast, toaster } from "@kobalte/core/toast";

// Styles
import {
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  ListStyles,
  ProgressFillStyles,
  ProgressTrackStyles,
  TitleStyles,
  ToastStyles,
} from "./styles";

// Types
import type { Props, Toast, ToastInstanceProps, ToastUpdate } from "./types";

function ToastInstance(props: ToastInstanceProps) {
  return (
    <KobalteToast
      toastId={props.toastComponentProps.toastId}
      class={ToastStyles}
    >
      <div class={ContentStyles}>
        <div>
          <KobalteToast.Title class={TitleStyles}>
            {props.toastUpdate.title}
          </KobalteToast.Title>
          <KobalteToast.Description class={DescriptionStyles}>
            {props.toastUpdate.description}
          </KobalteToast.Description>
        </div>
        <KobalteToast.CloseButton class={CloseButtonStyles}>
          <i aria-hidden="true" class="fa-solid fa-xmark"></i>
        </KobalteToast.CloseButton>
      </div>
      <KobalteToast.ProgressTrack class={ProgressTrackStyles}>
        <KobalteToast.ProgressFill class={ProgressFillStyles} />
      </KobalteToast.ProgressTrack>
    </KobalteToast>
  );
}

export default function Toast(props: Props) {
  const [toasts, setToasts] = createSignal<Toast[]>([]);

  const showToast = (toastUpdate: ToastUpdate) => {
    const value = toaster.show((props) => (
      <ToastInstance toastComponentProps={props} toastUpdate={toastUpdate} />
    ));

    setToasts([...toasts(), { id: toastUpdate.id, value }]);
  };

  const updateToast = ({
    toast: { value },
    toastUpdate,
  }: {
    toast: Toast;
    toastUpdate: ToastUpdate;
  }) => {
    toaster.update(value, (props) => (
      <ToastInstance toastComponentProps={props} toastUpdate={toastUpdate} />
    ));

    setToasts([...toasts(), { id: toastUpdate.id, value: value }]);
  };

  createEffect(() => {
    const accessedToastUpdates = props.toastUpdates();
    const toastUpdatesLength = accessedToastUpdates.length;

    if (toastUpdatesLength > 0 && toastUpdatesLength !== toasts().length) {
      const mostRecentUpdate = accessedToastUpdates[toastUpdatesLength - 1];
      const mostRecentUpdateId = mostRecentUpdate.id;
      const existingToast = toasts().find(
        (toast) => toast.id === mostRecentUpdateId,
      );

      if (existingToast) {
        updateToast({ toast: existingToast, toastUpdate: mostRecentUpdate });
      } else {
        showToast(mostRecentUpdate);
      }
    }
  });

  return (
    <Portal>
      <KobalteToast.Region>
        <KobalteToast.List class={ListStyles} />
      </KobalteToast.Region>
    </Portal>
  );
}
