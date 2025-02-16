// Packages
import { createMediaQuery } from "@solid-primitives/media";
import { createSignal, For, mergeProps, Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { NavigationMenu as KobalteNavigationMenu } from "@kobalte/core/navigation-menu";
import { v4 as uuid } from "uuid";

// Components
import Accordion from "../Accordion";
import Popover from "../Popover";

// Styles
import {
  ArrowStyles,
  ContentWithCallout,
  ContentWithoutCallout,
  IconStyles,
  ItemCalloutStyles,
  ItemDescriptionStyles,
  ItemLabelStyles,
  ItemStyles,
  LineStyles,
  LineTopBottomStyles,
  MobileMenuButtonStyles,
  MobilePopoverContentStyles,
  MobilePopoverStyles,
  RootStyles,
  TitleContainerStyles,
  TitleStyles,
  TriggerIndicatorStyles,
  TriggerStyles,
  ViewportStyles,
} from "./styles";

// Types
import { HeadingLevelEnum } from "../../types";
import type { NavigationMenuItem, NavigationMenuMenu, Props } from "./types";

export default function NavigationMenu(initialProps: Props) {
  const mergedProps = mergeProps(
    {
      arrowProps: {},
      className: "",
      contentProps: {},
      itemIndicatorProps: {},
      menuProps: {},
      viewportProps: {},
    },
    initialProps,
  );

  const [props, rest] = splitProps(mergedProps, [
    "arrowProps",
    "className",
    "contentProps",
    "homeHref",
    "icon",
    "itemIndicatorProps",
    "items",
    "menuProps",
    "title",
    "viewportProps",
  ]);

  const isSmall = createMediaQuery("(min-width): 640px");
  const [mobileNavigationOpen, setMobileNavigationOpen] = createSignal(false);

  const hasImage = (menuItems: NavigationMenuItem[]) =>
    menuItems.some((item) => !!item.image);

  const Item = ({
    description,
    href,
    image,
    title,
    ...itemProps
  }: NavigationMenuItem) => (
    <Dynamic
      component={isSmall() ? KobalteNavigationMenu.Item : "a"}
      {...itemProps}
      class={!!image ? ItemCalloutStyles : ItemStyles}
      href={href}
    >
      <Show when={image}>
        <img {...image} />
      </Show>
      <Dynamic
        component={isSmall() ? KobalteNavigationMenu.ItemLabel : "h3"}
        class={ItemLabelStyles}
      >
        {title}
      </Dynamic>
      <Show when={description}>
        <Dynamic
          component={isSmall() ? KobalteNavigationMenu.ItemDescription : "p"}
          class={ItemDescriptionStyles}
        >
          {description}
        </Dynamic>
      </Show>
    </Dynamic>
  );

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
          {...props.itemIndicatorProps}
          class={TriggerIndicatorStyles}
        >
          <i aria-hidden="true" class="fa-solid fa-caret-down" />
        </KobalteNavigationMenu.Icon>
      </Show>
    </KobalteNavigationMenu.Trigger>
  );

  const mapToAccordionItems = () =>
    props.items
      .filter((menuItem) => menuItem.items?.length > 0)
      .map((menuItem) => ({
        disabled: menuItem.disabled,
        id: uuid(),
        content: (
          <div
            class={
              hasImage(menuItem.items)
                ? ContentWithCallout
                : ContentWithoutCallout
            }
          >
            <For each={menuItem.items}>{(item) => <Item {...item} />}</For>
          </div>
        ),
        title: menuItem.title,
      }));

  return (
    <div class={props.className}>
      <Show when={props.icon || props.title}>
        <Dynamic
          component={!!props.homeHref ? "a" : "div"}
          {...(props.homeHref ? { href: props.homeHref } : {})}
          class={TitleContainerStyles}
        >
          <Show when={props.icon}>
            <figure>
              <img {...props.icon} class={IconStyles} />
              <figcaption class="h-0 opacity-0 w-0">
                Navigate to Home
              </figcaption>
            </figure>
          </Show>
          <Show when={props.title}>
            <h1 class={TitleStyles}>{props.title}</h1>
          </Show>
        </Dynamic>
      </Show>
      <KobalteNavigationMenu {...rest} class={RootStyles}>
        <For each={props.items}>
          {({ items, ...rest }) => (
            <Show
              when={items.length > 0}
              fallback={<Trigger {...rest} items={items} />}
            >
              <KobalteNavigationMenu.Menu
                {...props.contentProps}
                {...props.menuProps}
              >
                <Trigger {...rest} items={items} />
                <KobalteNavigationMenu.Portal>
                  <KobalteNavigationMenu.Content
                    class={
                      hasImage(items)
                        ? ContentWithCallout
                        : ContentWithoutCallout
                    }
                  >
                    <For each={items}>{(item) => <Item {...item} />}</For>
                  </KobalteNavigationMenu.Content>
                </KobalteNavigationMenu.Portal>
              </KobalteNavigationMenu.Menu>
            </Show>
          )}
        </For>
        <KobalteNavigationMenu.Viewport
          {...props.viewportProps}
          class={ViewportStyles}
        >
          <KobalteNavigationMenu.Arrow
            {...props.arrowProps}
            class={ArrowStyles}
          />
        </KobalteNavigationMenu.Viewport>
      </KobalteNavigationMenu>
      <Popover
        buttonContent={
          <div class={MobileMenuButtonStyles({ open: mobileNavigationOpen() })}>
            <svg viewBox="0 0 32 32">
              <path
                class={LineTopBottomStyles}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class={LineStyles} d="M7 16 27 16"></path>
            </svg>
          </div>
        }
        className={MobilePopoverStyles}
        contentClass={MobilePopoverContentStyles}
        contentProps={{
          fitViewport: true,
          overflowPadding: 0,
        }}
        isIconButton
        modal
        open={mobileNavigationOpen}
        onOpenChange={setMobileNavigationOpen}
      >
        <Accordion
          collapsible
          headingLevel={HeadingLevelEnum.Two}
          items={mapToAccordionItems()}
        />
        <For each={props.items.filter((menuItem) => !!menuItem.href)}>
          {(item) => (
            <a {...item} class={TriggerStyles}>
              {item.title}
            </a>
          )}
        </For>
      </Popover>
    </div>
  );
}
