import { faker } from "@faker-js/faker";
import Tabs from "./story";
import { TabsActivationModeEnum, TabsOrientationEnum } from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    activationMode: {
      control: "select",
      options: [
        TabsActivationModeEnum.Automatic,
        TabsActivationModeEnum.Manual,
      ],
    },
    orientation: {
      control: "select",
      options: [TabsOrientationEnum.Horizontal, TabsOrientationEnum.Vertical],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  activationMode: TabsActivationModeEnum.Automatic,
  ariaLabel: faker.lorem.word(),
  disabled: false,
  orientation: TabsOrientationEnum.Horizontal,
};

export const Horizontal: Story = {
  args,
};

export const Vertical: Story = {
  args: {
    ...args,
    orientation: TabsOrientationEnum.Vertical,
  },
};

export const HorizontalWithClass: Story = {
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
  },
};

export const VerticalWithClass: Story = {
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
    orientation: TabsOrientationEnum.Vertical,
  },
};
