// Packages
import { mergeProps, splitProps } from "solid-js";
import { Tooltip as KobalteTooltip } from "@kobalte/core/tooltip";

// Styles
import { TextStyles, TooltipStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Tooltip(initialProps: Props) {
  const mergedProps = mergeProps(
    { className: "", triggerClass: "" },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "className",
    "children",
    "open",
    "text",
    "triggerClass",
  ]);

  const rootProps = () => ({
    ...rest,
    ...(props.open ? { open: props.open() } : {}),
  });

  return (
    <KobalteTooltip {...rootProps()}>
      <KobalteTooltip.Trigger
        as="div"
        class={`${props.triggerClass} ${TriggerStyles}`}
        role="tooltip"
        tabIndex={0}
      >
        {props.children}
      </KobalteTooltip.Trigger>
      <KobalteTooltip.Portal>
        <KobalteTooltip.Content class={`${props.className} ${TooltipStyles}`}>
          <KobalteTooltip.Arrow />
          <p class={TextStyles}>{props.text}</p>
        </KobalteTooltip.Content>
      </KobalteTooltip.Portal>
    </KobalteTooltip>
  );
}
