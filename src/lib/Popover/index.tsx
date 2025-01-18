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
  description,
  disabled,
  isIconButton,
  title,
}: Props) {
  return (
    <KobaltePopover>
      <KobaltePopover.Trigger
        aria-label={ariaLabel}
        class={`${className} ${ButtonStyles({ isIconButton })}`}
        disabled={disabled}
      >
        <div class="trigger-content">{buttonContent}</div>
      </KobaltePopover.Trigger>
      <KobaltePopover.Portal>
        <KobaltePopover.Content class={ContentStyles}>
          <KobaltePopover.Arrow />
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
        </KobaltePopover.Content>
      </KobaltePopover.Portal>
    </KobaltePopover>
  );
}
