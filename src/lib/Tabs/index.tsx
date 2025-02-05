// Packages
import { For } from "solid-js";
import { Tabs as KobalteTabs } from "@kobalte/core/tabs";

// Styles
import {
  ContainerStyles,
  ContentStyles,
  IndicatorStyles,
  ListStyles,
  TriggerStyles,
} from "./styles";

// Types
import type { Props } from "./types";
import { TabsOrientationEnum } from "./types";

export default function Tabs({
  ariaLabel,
  className,
  items,
  value,
  ...rest
}: Props) {
  return (
    <KobalteTabs
      {...rest}
      aria-label={ariaLabel}
      class={`${className} ${ContainerStyles}`}
      value={value ? value() : undefined}
    >
      <KobalteTabs.List class={ListStyles}>
        <For each={items}>
          {({ id, label }) => (
            <KobalteTabs.Trigger class={TriggerStyles} value={id}>
              {label}
            </KobalteTabs.Trigger>
          )}
        </For>
        <KobalteTabs.Indicator class={IndicatorStyles} />
      </KobalteTabs.List>
      <For each={items}>
        {({ children, id }) => (
          <KobalteTabs.Content class={ContentStyles} value={id}>
            {children}
          </KobalteTabs.Content>
        )}
      </For>
    </KobalteTabs>
  );
}
