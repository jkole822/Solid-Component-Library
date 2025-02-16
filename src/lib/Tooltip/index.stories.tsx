// Packages
import { faker } from "@faker-js/faker";

// Components
import Tooltip from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    closeDelay: { control: "number" },
    id: { control: "text" },
    openDelay: { control: "number" },
    skipDelayDuration: { control: "number" },
    triggerClass: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultOpen: false,
    forceMount: false,
    ignoreSafeArea: false,
    text: faker.lorem.sentence(),
    triggerOnFocusOnly: false,
  },
};
