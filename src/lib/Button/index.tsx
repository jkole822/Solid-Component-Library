// Packages
import { Button as KobalteButton } from "@kobalte/core/button";
import {
  createEffect,
  createSignal,
  For,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

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

export default function Button(initialProps: Props) {
  const mergedProps = mergeProps(
    {
      className: "",
      disabled: false,
      showBottomGlow: false,
      target: "_self",
      type: "button",
      variant: ButtonVariantsEnum.fill,
    },
    initialProps,
  );

  const [buttonProps, linkProps, props, rest] = splitProps(
    mergedProps,
    ["aria-controls", "aria-expanded", "aria-haspopup", "type"],
    ["href", "target"],
    ["children", "className", "onClick", "showBottomGlow", "variant"],
  );

  const [active, setActive] = createSignal(false);

  createEffect(() => {
    if (active()) {
      setTimeout(() => {
        setActive(false);
      }, 1000);
    }
  });

  const isFillButton = () => props.variant === ButtonVariantsEnum.fill;
  const isLink = () => !!linkProps.href;
  const variantStyles = () =>
    isFillButton()
      ? FillButtonStyles({ active: active() })
      : props.variant === ButtonVariantsEnum.outline
        ? OutlineButtonStyles({ showBottomGlow: props.showBottomGlow })
        : props.variant === ButtonVariantsEnum.lineOne
          ? LineOneButtonStyles
          : props.variant === ButtonVariantsEnum.lineTwo
            ? LineTwoButtonStyles
            : "";

  const rootProps = () => ({
    ...rest,
    ...(isLink()
      ? {
          ...linkProps,
          rel: linkProps.target === "_blank" ? "noreferrer" : undefined,
        }
      : buttonProps),
    class: `${props.className} ${variantStyles()}`,
    onClick: () => {
      setActive(true);
      if (props.onClick) props.onClick();
    },
  });

  return (
    <KobalteButton {...rootProps()} as={isLink() ? "a" : "button"}>
      {props.children}
      <Show when={isFillButton()}>
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
