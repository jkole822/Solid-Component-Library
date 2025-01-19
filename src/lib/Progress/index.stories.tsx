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

export const Basic: Story = {
  args: {
    label: faker.lorem.word(),
  },
};

export const WithClass: Story = {
  args: {
    className: "sm:w-72",
    label: faker.lorem.word(),
  },
};
