// Packages
import { Collapsible as KobalteCollapsible } from "@kobalte/core/collapsible";

// Styles
import { ContentContainerStyles, ContentStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Collapsible({
  buttonContent,
  children,
  className = "",
  open,
  ...rest
}: Props) {
  return (
    <KobalteCollapsible
      {...rest}
      class={className}
      open={open !== undefined ? open() : undefined}
    >
      <KobalteCollapsible.Trigger class={TriggerStyles}>
        {buttonContent}
        <i
          aria-hidden="true"
          class="fa-solid fa-sort [[data-expanded]_&]:hidden"
        ></i>
        <i
          aria-hidden="true"
          class="fa-solid fa-close hidden [[data-expanded]_&]:block"
        ></i>
      </KobalteCollapsible.Trigger>
      <KobalteCollapsible.Content class={ContentContainerStyles}>
        <div class={ContentStyles}>{children}</div>
      </KobalteCollapsible.Content>
    </KobalteCollapsible>
  );
}
