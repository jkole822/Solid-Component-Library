// Packages
import { Dialog as KobalteDialog } from "@kobalte/core/dialog";
import { Show } from "solid-js";

// Styles
import {
  ButtonContainerStyles,
  CancelButtonStyles,
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  OverlayStyles,
  SubmitButtonStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Dialog({
  cancelButtonText,
  children,
  className = "",
  description,
  open,
  onOpenChange,
  onSubmit,
  submitButtonText,
  title,
  trigger,
    ...rest
}: Props) {
  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <>
      <Show when={trigger}>{trigger}</Show>
      <KobalteDialog {...rest} open={open()} onOpenChange={onOpenChange}>
        <KobalteDialog.Portal>
          <KobalteDialog.Overlay class={OverlayStyles} />
          <KobalteDialog.Content
            class={`${className} ${ContentStyles}`}
          >
            <KobalteDialog.Title class={HeadingStyles}>
              {title}
            </KobalteDialog.Title>
            <KobalteDialog.Description class={DescriptionStyles}>
              {description}
            </KobalteDialog.Description>
            {children}
            <div class={ButtonContainerStyles}>
              <Show when={cancelButtonText}>
                <button class={CancelButtonStyles} onclick={handleClose}>
                  {cancelButtonText}
                </button>
              </Show>
              <Show when={submitButtonText && onSubmit}>
                <button class={SubmitButtonStyles} onclick={onSubmit}>
                  {submitButtonText}
                </button>
              </Show>
            </div>
            <KobalteDialog.CloseButton class={CloseButtonStyles}>
              <i aria-hidden="true" class="fa-solid fa-xmark"></i>
            </KobalteDialog.CloseButton>
          </KobalteDialog.Content>
        </KobalteDialog.Portal>
      </KobalteDialog>
    </>
  );
}
