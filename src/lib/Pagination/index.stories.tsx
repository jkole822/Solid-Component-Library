import { faker } from "@faker-js/faker";
import Pagination from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: { table: { disable: true } },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  ariaLabel: faker.lorem.words(),
  count: 10,
  ellipsis: () => <span>...</span>,
  siblingCount: 1,
}

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto"
  }
}
