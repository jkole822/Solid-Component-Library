// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Popover from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";
import type { Props } from "./types";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    contentClass: { control: "text" },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  buttonContent: () => <span>Open Popover</span>,
  defaultOpen: false,
  description: faker.lorem.sentence(),
  forceMount: false,
  id: uuid(),
  isIconButton: false,
  modal: false,
  preventScroll: false,
  title: faker.lorem.words(2),
};

export const Basic: Story = {
  args,
};

export const IconButton: Story = {
  args: {
    ...args,
    ariaLabel: faker.lorem.words(3),
    buttonContent: () => <i aria-hidden="true" class="fa-solid fa-ghost"></i>,
    isIconButton: true,
  },
};

export const Modal: Story = {
  args: {
    ...args,
    modal: true,
    preventScroll: true,
  },
  render: (args: Props) => (
    <div {...args} class="h-[200vh]">
      <Popover {...args} />
    </div>
  ),
};
