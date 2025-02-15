// Packages
import { faker } from "@faker-js/faker";

// Components
import Carousel from ".";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number) =>
  Array.from({ length }).map((_) => ({
    cta: {
      href: "#",
      target: "_self",
      title: faker.lorem.word(),
    },
    description: faker.lorem.sentence(),
    image: {
      alt: faker.lorem.words(2),
      src: faker.image.url({ height: 900, width: 1200 }),
    },
    title: faker.lorem.words(3),
  }));

const args = {
  items: generateItems(10),
};

export const MinHeight: Story = {
  args,
};

export const FullScreenHeight: Story = {
  args: {
    ...args,
    className: "h-screen",
  },
};
