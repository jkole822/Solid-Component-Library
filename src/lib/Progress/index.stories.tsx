import { faker } from "@faker-js/faker";
import Progress from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  getLabelValue: (params: { value: number; min: number; max: number }) =>
    console.log(params),
  label: faker.lorem.word(),
  indeterminate: false,
  minValue: 0,
  maxValue: 100,
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
