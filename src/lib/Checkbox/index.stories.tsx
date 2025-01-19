import { faker } from "@faker-js/faker";
import Checkbox from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: faker.lorem.word(),
  },
};

export const WithClass: Story = {
  args: {
    className: "mx-auto",
    label: faker.lorem.word(),
  },
};
