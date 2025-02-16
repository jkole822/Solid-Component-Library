// Packages
import { Collapsible as KobalteCollapsible } from "@kobalte/core/collapsible";
import { mergeProps, splitProps } from "solid-js";

// Styles
import { ContentContainerStyles, ContentStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Collapsible(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "buttonContent",
    "children",
    "className",
    "open",
  ]);

  const rootProps = () => ({
    ...rest,
    ...(props.open !== undefined ? { open: props.open() } : {}),
    class: props.className,
  });

  return (
    <KobalteCollapsible {...rootProps}>
      <KobalteCollapsible.Trigger class={TriggerStyles}>
        {props.buttonContent}
        <i
          aria-hidden="true"
          class="fa-solid fa-sort in-data-expanded:hidden!"
        ></i>
        <i
          aria-hidden="true"
          class="fa-solid fa-close hidden! in-data-expanded:block!"
        ></i>
      </KobalteCollapsible.Trigger>
      <KobalteCollapsible.Content class={ContentContainerStyles}>
        <div class={ContentStyles}>{props.children}</div>
      </KobalteCollapsible.Content>
    </KobalteCollapsible>
  );
}
