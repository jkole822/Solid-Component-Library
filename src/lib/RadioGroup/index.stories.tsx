import { faker } from "@faker-js/faker";
import RadioGroup from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const args = {
  items,
  label: faker.lorem.word(),
};

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto",
  },
};
