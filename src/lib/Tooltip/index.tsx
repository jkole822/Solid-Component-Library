// Packages
import { Tooltip as KobalteTooltip } from "@kobalte/core/tooltip";

// Styles
import { TextStyles, TooltipStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Tooltip({
  className = "",
  children,
  text,
  triggerClass = "",
}: Props) {
  return (
    <KobalteTooltip>
      <KobalteTooltip.Trigger
        as="div"
        class={`${triggerClass} ${TriggerStyles}`}
        role="tooltip"
        tabIndex={0}
      >
        {children}
      </KobalteTooltip.Trigger>
      <KobalteTooltip.Portal>
        <KobalteTooltip.Arrow />
        <KobalteTooltip.Content class={`${className} ${TooltipStyles}`}>
          <p class={TextStyles}>{text}</p>
        </KobalteTooltip.Content>
      </KobalteTooltip.Portal>
    </KobalteTooltip>
  );
}
