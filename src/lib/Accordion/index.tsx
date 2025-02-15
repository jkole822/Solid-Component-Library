// Packages
import { Accordion as KobalteAccordion } from "@kobalte/core/accordion";
import { For, mergeProps, Show, splitProps } from "solid-js";

// Styles
import {
  ButtonStyles,
  ContainerStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  SectionStyles,
} from "./styles";

// Types
import { Props } from "./types";

export default function Accordion(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "className",
    "headingLevel",
    "items",
    "value",
  ]);

  const rootProps = () => ({
    ...rest,
    ...(props.value ? { value: props.value() } : {}),
    class: `${props.className} ${ContainerStyles}`,
  });

  return (
    <KobalteAccordion {...rootProps()}>
      <For each={props.items}>
        {(item) => (
          <KobalteAccordion.Item
            class={SectionStyles}
            disabled={item.disabled}
            value={item.id}
          >
            <KobalteAccordion.Header
              as={props.headingLevel}
              class={HeadingStyles}
            >
              <KobalteAccordion.Trigger class={ButtonStyles}>
                <span>{item.title}</span>
                <i
                  aria-hidden="true"
                  class="accordion-trigger-icon fa-solid fa-chevron-down"
                ></i>
              </KobalteAccordion.Trigger>
            </KobalteAccordion.Header>
            <KobalteAccordion.Content class={ContentStyles}>
              <Show when={item.description}>
                <p class={DescriptionStyles}>{item.description}</p>
              </Show>
              <Show when={item.content}>{item.content}</Show>
            </KobalteAccordion.Content>
          </KobalteAccordion.Item>
        )}
      </For>
    </KobalteAccordion>
  );
}
