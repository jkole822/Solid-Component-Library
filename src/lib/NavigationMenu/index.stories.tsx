// Packages
import { faker } from "@faker-js/faker";

// Components
import NavigationMenu from ".";

// Types
import { NavigationMenuOrientationEnum } from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";
import type { Props } from "./types";

const meta = {
  title: "NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: { control: "text" },
    orientation: {
      control: "select",
      options: [
        NavigationMenuOrientationEnum.Horizontal,
        NavigationMenuOrientationEnum.Vertical,
      ],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number, addImage?: boolean) =>
  Array.from({ length }).map((_, index) => ({
    description: faker.lorem.sentence(),
    disabled: index === 1,
    href: "#",
    image:
      addImage && index === 0
        ? {
            alt: faker.lorem.words(3),
            src: faker.image.url({ height: 48, width: 48 }),
            title: faker.lorem.sentence(),
          }
        : undefined,
    title: faker.lorem.words(2),
  }));

const generateMenuItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    disabled: index === 1,
    href: index === length - 1 ? "https://www.solidjs.com/" : undefined,
    items:
      index === length - 1
        ? []
        : index === 0
          ? generateItems(4, true)
          : generateItems(6),
    target: index === length - 1 ? "_blank" : undefined,
    title: faker.lorem.word(),
  }));

const args = {
  className:
    "bg-neutral-secondary-950 flex fixed items-center justify-between p-4 w-screen",
  delayDuration: 100,
  focusOnAlt: true,
  forceMount: false,
  homeHref: "#",
  icon: {
    alt: faker.lorem.words(3),
    src: faker.image.url({ height: 80, width: 80 }),
  },
  items: generateMenuItems(5),
  loop: true,
  skipDelayDuration: 200,
  title: faker.lorem.word(),
};

const render = (args: Props) => (
  <div class="h-[200vh]">
    <NavigationMenu {...args} />
  </div>
);

export const Horizontal: Story = {
  args,
  render,
};

export const Vertical: Story = {
  args: {
    ...args,
    className:
      "bg-neutral-secondary-950 inline-flex fixed items-center justify-between p-4 w-screen sm:[&_nav]:w-full sm:[&_.navigation-menu-root]:items-stretch sm:[&_.navigation-menu-root]:w-full sm:[&_.navigation-menu-trigger]:w-full sm:flex-col sm:gap-4 sm:h-screen sm:items-start sm:justify-stretch sm:w-auto",
    orientation: NavigationMenuOrientationEnum.Vertical,
  },
  render,
};
