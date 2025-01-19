import { faker } from "@faker-js/faker";
import Slider from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultValue: [30],
  label: faker.lorem.word(),
  maxValue: 100,
  minValue: 0,
  step: 1,
};

export const Basic: Story = {
  args,
};

export const MultiValue: Story = {
  args: {
    ...args,
    defaultValue: [25, 75],
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
