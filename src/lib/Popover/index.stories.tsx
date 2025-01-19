import { faker } from "@faker-js/faker";
import Popover from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  ariaLabel: faker.lorem.words(3),
  buttonContent: () => <span>Open Popover</span>,
  description: faker.lorem.sentence(),
  title: faker.lorem.words(2),
};

export const Basic: Story = {
  args,
};

export const IconButton: Story = {
  args: {
    ...args,
    buttonContent: () => <i aria-hidden="true" class="fa-solid fa-ghost"></i>,
    isIconButton: true,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto",
  },
};
