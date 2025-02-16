// Packages
import { For, mergeProps, splitProps } from "solid-js";
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
import { Props, TabsOrientationEnum } from "./types";

export default function Tabs(initialProps: Props) {
  const mergedProps = mergeProps(
    { className: "", orientation: TabsOrientationEnum.Horizontal },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "ariaLabel",
    "className",
    "items",
    "value",
  ]);

  const rootProps = () => ({
    ...rest,
    ...(props.value ? { value: props.value() } : {}),
    "aria-label": props.ariaLabel,
    class: `${props.className} ${ContainerStyles}`,
  });

  return (
    <KobalteTabs {...rootProps()}>
      <KobalteTabs.List class={ListStyles}>
        <For each={props.items}>
          {({ id, label }) => (
            <KobalteTabs.Trigger class={TriggerStyles} value={id}>
              {label}
            </KobalteTabs.Trigger>
          )}
        </For>
        <KobalteTabs.Indicator class={IndicatorStyles} />
      </KobalteTabs.List>
      <For each={props.items}>
        {({ children, id }) => (
          <KobalteTabs.Content class={ContentStyles} value={id}>
            {children}
          </KobalteTabs.Content>
        )}
      </For>
    </KobalteTabs>
  );
}
