// Packages
import { Dialog as KobalteDialog } from "@kobalte/core/dialog";
import { mergeProps, Show, splitProps } from "solid-js";

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

export default function Dialog(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "cancelButtonText",
    "children",
    "className",
    "description",
    "open",
    "onOpenChange",
    "onSubmit",
    "submitButtonText",
    "title",
    "trigger",
  ]);

  const handleClose = () => {
    props.onOpenChange(false);
  };

  return (
    <>
      <Show when={props.trigger}>{props.trigger}</Show>
      <KobalteDialog
        {...rest}
        open={props.open()}
        onOpenChange={props.onOpenChange}
      >
        <KobalteDialog.Portal>
          <KobalteDialog.Overlay class={OverlayStyles} />
          <KobalteDialog.Content class={`${props.className} ${ContentStyles}`}>
            <KobalteDialog.Title class={HeadingStyles}>
              {props.title}
            </KobalteDialog.Title>
            <KobalteDialog.Description class={DescriptionStyles}>
              {props.description}
            </KobalteDialog.Description>
            {props.children}
            <div class={ButtonContainerStyles}>
              <Show when={props.cancelButtonText}>
                <button class={CancelButtonStyles} onclick={handleClose}>
                  {props.cancelButtonText}
                </button>
              </Show>
              <Show when={props.submitButtonText && props.onSubmit}>
                <button class={SubmitButtonStyles} onclick={props.onSubmit}>
                  {props.submitButtonText}
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
