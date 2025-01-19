import { faker } from "@faker-js/faker";
import Switch from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>;

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
