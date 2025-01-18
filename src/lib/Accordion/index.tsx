// Packages
import { Accordion as KobalteAccordion } from "@kobalte/core/accordion";
import { For } from "solid-js";

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

export default function Accordion({
  className = "",
  defaultValue,
  headingLevel,
  items,
}: Props) {
  return (
    <KobalteAccordion
      class={`${className} ${ContainerStyles}`}
      defaultValue={[defaultValue]}
    >
      <For each={items}>
        {(item) => (
          <KobalteAccordion.Item class={SectionStyles} value={String(item.id)}>
            <KobalteAccordion.Header as={headingLevel} class={HeadingStyles}>
              <KobalteAccordion.Trigger class={ButtonStyles}>
                <span>{item.title}</span>
                <i
                  aria-hidden="true"
                  class="accordion-trigger-icon fa-solid fa-chevron-down"
                ></i>
              </KobalteAccordion.Trigger>
            </KobalteAccordion.Header>
            <KobalteAccordion.Content class={ContentStyles}>
              <p class={DescriptionStyles}>{item.description}</p>
            </KobalteAccordion.Content>
          </KobalteAccordion.Item>
        )}
      </For>
    </KobalteAccordion>
  );
}
