// Packages
import { Tooltip as KobalteTooltip } from "@kobalte/core/tooltip";

// Styles
import { TextStyles, TooltipStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Tooltip({
  className = "",
  children,
  open,
  text,
  triggerClass = "",
  ...rest
}: Props) {
  return (
    <KobalteTooltip {...rest} open={open ? open() : undefined}>
      <KobalteTooltip.Trigger
        as="div"
        class={`${triggerClass} ${TriggerStyles}`}
        role="tooltip"
        tabIndex={0}
      >
        {children}
      </KobalteTooltip.Trigger>
      <KobalteTooltip.Portal>
        <KobalteTooltip.Content class={`${className} ${TooltipStyles}`}>
          <KobalteTooltip.Arrow />
          <p class={TextStyles}>{text}</p>
        </KobalteTooltip.Content>
      </KobalteTooltip.Portal>
    </KobalteTooltip>
  );
}
