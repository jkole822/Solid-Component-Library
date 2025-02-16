// Packages
import { Popover as KobaltePopover } from "@kobalte/core/popover";
import { mergeProps, Show, splitProps } from "solid-js";

// Styles
import {
  ButtonStyles,
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  TitleStyles,
} from "./styles";

// Types
import type { Props } from "./types";

export default function Popover(initialProps: Props) {
  const mergedProps = mergeProps(
    { className: "", contentClass: "", contentProps: {} },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "ariaLabel",
    "buttonContent",
    "children",
    "className",
    "contentClass",
    "contentProps",
    "contentStyles",
    "description",
    "disabled",
    "isIconButton",
    "onOpenChange",
    "open",
    "title",
  ]);

  const rootProps = () => ({
    ...rest,
    ...props.contentProps,
    ...(!!props.onOpenChange && props.open !== undefined
      ? { onOpenChange: props.onOpenChange, open: props.open() }
      : {}),
  });

  return (
    <KobaltePopover {...rootProps()}>
      <KobaltePopover.Trigger
        aria-label={props.ariaLabel}
        class={`${props.className} ${ButtonStyles({ isIconButton: props.isIconButton })}`}
        disabled={props.disabled}
      >
        {props.buttonContent}
      </KobaltePopover.Trigger>
      <KobaltePopover.Portal>
        <KobaltePopover.Content
          class={`${props.contentClass} ${ContentStyles}`}
        >
          <div style={!!props.contentStyles ? props.contentStyles() : {}}>
            <KobaltePopover.Arrow class="popover-arrow" />
            <Show when={props.title}>
              <KobaltePopover.Title class={TitleStyles}>
                {props.title}
              </KobaltePopover.Title>
            </Show>
            <Show when={props.description}>
              <KobaltePopover.Description class={DescriptionStyles}>
                {props.description}
              </KobaltePopover.Description>
            </Show>
            <Show when={props.children}>{props.children}</Show>
            <KobaltePopover.CloseButton class={CloseButtonStyles}>
              <i aria-hidden="true" class="fa-solid fa-xmark"></i>
            </KobaltePopover.CloseButton>
          </div>
        </KobaltePopover.Content>
      </KobaltePopover.Portal>
    </KobaltePopover>
  );
}
