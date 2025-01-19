import { faker } from "@faker-js/faker";
import Tooltip from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  text: faker.lorem.sentence(),
};

export const Basic: Story = {
  args,
};

export const WithTriggerClass: Story = {
  args: {
    ...args,
    triggerClass: "mx-auto",
  },
};
