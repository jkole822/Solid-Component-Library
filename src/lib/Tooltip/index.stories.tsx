import { faker } from "@faker-js/faker";
import Tooltip from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    closeDelay: { control: "number" },
    id: { control: "text" },
    openDelay: { control: "number" },
    skipDelayDuration: { control: "number" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultOpen: false,
  forceMount: false,
  ignoreSafeArea: false,
  text: faker.lorem.sentence(),
  triggerOnFocusOnly: false,
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
