// Packages
import { faker } from "@faker-js/faker";

// Components
import Pagination from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    defaultPage: { control: "number" },
    fixedItems: { control: "select", options: [false, true, "no-ellipsis"] },
    showFirst: { control: "boolean" },
    showLast: { control: "boolean" },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  ariaLabel: faker.lorem.words(),
  count: 10,
  defaultPage: 1,
  disabled: false,
  ellipsis: () => <span>...</span>,
  fixedItems: false,
  hideNextButton: false,
  hidePreviousButton: false,
  siblingCount: 1,
};

export const Basic: Story = {
  args,
};

export const AlwaysShowFirstAndLast: Story = {
  args: {
    ...args,
    showFirst: true,
    showLast: true,
  },
};

export const FixedItems: Story = {
  args: {
    ...args,
    fixedItems: true,
  },
};

export const FixedItemsNoEllipsis: Story = {
  args: {
    ...args,
    ellipsis: undefined,
    fixedItems: "no-ellipsis",
  },
};

export const HiddenPreviousNextButtons: Story = {
  args: {
    ...args,
    ellipsis: undefined,
    fixedItems: "no-ellipsis",
    hideNextButton: true,
    hidePreviousButton: true,
    siblingCount: 3,
  },
};
