import { faker } from "@faker-js/faker";
import Tabs from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";
import { TabsOrientationEnum } from "./types";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  ariaLabel: faker.lorem.word(),
  className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
};

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: TabsOrientationEnum.Vertical,
  },
};

export const HorizontalWithClass: Story = {
  args,
};

export const VerticalWithClass: Story = {
  args: {
    ...args,
    orientation: TabsOrientationEnum.Vertical,
  },
};
