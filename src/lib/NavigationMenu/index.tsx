// Packages
import { For, Show } from "solid-js";
import { NavigationMenu as KobalteNavigationMenu } from "@kobalte/core/navigation-menu";

// Styles
import {
  ArrowStyles,
  ContentWithCallout,
  ContentWithoutCallout,
  ItemCalloutStyles,
  ItemDescriptionStyles,
  ItemLabelStyles,
  ItemStyles,
  RootStyles,
  TriggerIndicatorStyles,
  TriggerStyles,
  ViewportStyles,
} from "./styles";

// Types
import type { NavigationMenuItem, NavigationMenuMenu, Props } from "./types";

export default function NavigationMenu({
  arrowProps = {},
  className = "",
  contentProps = {},
  itemIndicatorProps = {},
  items,
  viewportProps = {},
  ...rest
}: Props) {
  const hasImage = (menuItems: NavigationMenuItem[]) =>
    menuItems.some((item) => !!item.image);

  const Trigger = ({
    href,
    items,
    title,
    ...triggerProps
  }: NavigationMenuMenu) => (
    <KobalteNavigationMenu.Trigger
      {...triggerProps}
      {...(href ? { as: "a", href } : {})}
      class={TriggerStyles}
    >
      {title}
      <Show when={items.length > 0}>
        <KobalteNavigationMenu.Icon
          {...itemIndicatorProps}
          class={TriggerIndicatorStyles}
        >
          <i aria-hidden="true" class="fa-solid fa-caret-down" />
        </KobalteNavigationMenu.Icon>
      </Show>
    </KobalteNavigationMenu.Trigger>
  );

  return (
    <KobalteNavigationMenu {...rest} class={`${className} ${RootStyles}`}>
      <For each={items}>
        {({ items, ...rest }) => (
          <Show
            when={items.length > 0}
            fallback={<Trigger {...rest} items={items} />}
          >
            <KobalteNavigationMenu.Menu>
              <Trigger {...rest} items={items} />
              <KobalteNavigationMenu.Portal>
                <KobalteNavigationMenu.Content
                  {...contentProps}
                  class={
                    hasImage(items) ? ContentWithCallout : ContentWithoutCallout
                  }
                >
                  <For each={items}>
                    {({ description, href, image, title, ...itemProps }) => (
                      <KobalteNavigationMenu.Item
                        {...itemProps}
                        class={!!image ? ItemCalloutStyles : ItemStyles}
                        href={href}
                      >
                        <Show when={image}>
                          <img
                            alt={image?.alt}
                            class={image?.className}
                            sizes={image?.sizes}
                            src={image?.src}
                            srcSet={image?.srcset}
                          />
                        </Show>
                        <KobalteNavigationMenu.ItemLabel
                          class={ItemLabelStyles}
                        >
                          {title}
                        </KobalteNavigationMenu.ItemLabel>
                        <Show when={description}>
                          <KobalteNavigationMenu.ItemDescription
                            class={ItemDescriptionStyles}
                          >
                            {description}
                          </KobalteNavigationMenu.ItemDescription>
                        </Show>
                      </KobalteNavigationMenu.Item>
                    )}
                  </For>
                </KobalteNavigationMenu.Content>
              </KobalteNavigationMenu.Portal>
            </KobalteNavigationMenu.Menu>
          </Show>
        )}
      </For>
      <KobalteNavigationMenu.Viewport {...viewportProps} class={ViewportStyles}>
        <KobalteNavigationMenu.Arrow {...arrowProps} class={ArrowStyles} />
      </KobalteNavigationMenu.Viewport>
    </KobalteNavigationMenu>
  );
}
