// Packages
import { faker } from "@faker-js/faker";

// Components
import Tabs from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";
import { TabsActivationModeEnum, TabsOrientationEnum } from "./types";

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
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
  },
};

export const Vertical: Story = {
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
    orientation: TabsOrientationEnum.Vertical,
  },
};
