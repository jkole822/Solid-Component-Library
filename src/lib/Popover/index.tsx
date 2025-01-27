// Packages
import { Popover as KobaltePopover } from "@kobalte/core/popover";
import { Show } from "solid-js";

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

export default function Popover({
  ariaLabel,
  buttonContent,
  children,
  className = "",
  contentClass = "",
  contentProps = {},
  contentStyles,
  description,
  disabled,
  isIconButton,
  onOpenChange,
  open,
  title,
  ...rest
}: Props) {
  return (
    <KobaltePopover
      {...rest}
      {...contentProps}
      {...(!!onOpenChange && open !== undefined
        ? { onOpenChange, open: open() }
        : {})}
    >
      <KobaltePopover.Trigger
        aria-label={ariaLabel}
        class={`${className} ${ButtonStyles({ isIconButton })}`}
        disabled={disabled}
      >
        {buttonContent}
      </KobaltePopover.Trigger>
      <KobaltePopover.Portal>
        <KobaltePopover.Content class={`${contentClass} ${ContentStyles}`}>
          <div style={!!contentStyles ? contentStyles() : {}}>
            <KobaltePopover.Arrow class="popover-arrow" />
            <Show when={title}>
              <KobaltePopover.Title class={TitleStyles}>
                {title}
              </KobaltePopover.Title>
            </Show>
            <Show when={description}>
              <KobaltePopover.Description class={DescriptionStyles}>
                {description}
              </KobaltePopover.Description>
            </Show>
            <Show when={children}>{children}</Show>
            <KobaltePopover.CloseButton class={CloseButtonStyles}>
              <i aria-hidden="true" class="fa-solid fa-xmark"></i>
            </KobaltePopover.CloseButton>
          </div>
        </KobaltePopover.Content>
      </KobaltePopover.Portal>
    </KobaltePopover>
  );
}
