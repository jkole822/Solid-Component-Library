// Packages
import { Button as KobalteButton } from "@kobalte/core/button";
import { For, Show } from "solid-js";

// Components
import StarVector from "./starVector";

// Styles
import {
  FillButtonStyles,
  LineOneButtonStyles,
  LineTwoButtonStyles,
  OutlineButtonStyles,
} from "./styles";

// Types
import type { Props } from "./types";
import { ButtonVariantsEnum } from "./types";

export default function Button({
  ariaControls,
  ariaExpanded,
  ariaHasPopup,
  ariaHidden,
  ariaLabel,
  children,
  className = "",
  disabled = false,
  disabledAccessor,
  href,
  id,
  showBottomGlow = false,
  target = "_self",
  type = "button",
  variant,
  ...rest
}: Props) {
  const variantStyles = () =>
    variant === ButtonVariantsEnum.fill
      ? FillButtonStyles
      : variant === ButtonVariantsEnum.outline
        ? OutlineButtonStyles({ showBottomGlow })
        : variant === ButtonVariantsEnum.lineOne
          ? LineOneButtonStyles
          : variant === ButtonVariantsEnum.lineTwo
            ? LineTwoButtonStyles
            : "";

  const buttonProps = {
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-haspopup": ariaHasPopup,
    type,
  };

  const linkProps = {
    href,
    rel: target === "_blank" ? "noreferrer" : undefined,
    target,
  };

  const props = () => ({
    ...rest,
    ...(!!href ? linkProps : buttonProps),
    ...(!!id ? { id: String(id) } : {}),
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    class: `${className} ${variantStyles()}`,
    disabled: disabledAccessor !== undefined ? disabledAccessor() : disabled,
  });

  return (
    <KobalteButton {...props()} as={href ? "a" : "button"}>
      {children}
      <Show when={variant === ButtonVariantsEnum.fill}>
        <For each={[...Array(6).keys()]}>
          {(_, index) => (
            <div class={`star star-${index()}`}>
              <StarVector />
            </div>
          )}
        </For>
      </Show>
    </KobalteButton>
  );
}
