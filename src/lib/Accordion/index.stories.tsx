import { faker } from "@faker-js/faker";
import Accordion from "./story";
import { HeadingLevelEnum } from "../../types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    headingLevel: {
      control: {
        type: "select",
      },
      options: [
        HeadingLevelEnum.One,
        HeadingLevelEnum.Two,
        HeadingLevelEnum.Three,
        HeadingLevelEnum.Four,
        HeadingLevelEnum.Five,
        HeadingLevelEnum.Six,
      ],
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: `item-${index + 1}`,
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    disabled: index === 2,
  }));

const args = {
  collapsible: false,
  defaultValue: ["item-1"],
  headingLevel: HeadingLevelEnum.Three,
  items: generateItems(5),
  shouldFocusWrap: false,
};

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
