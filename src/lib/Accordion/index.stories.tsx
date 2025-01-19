import { faker } from "@faker-js/faker";
import Accordion from ".";
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

const accordionItems = [
  {
    id: "item-1",
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
  },
  {
    id: "item-2",
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
  },
  {
    id: "item-3",
    title: faker.lorem.words(4),
    description: faker.lorem.sentence(),
  },
];

const args = {
  defaultValue: "item-1",
  headingLevel: HeadingLevelEnum.Three,
  items: accordionItems,
}

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72"
  }
}
