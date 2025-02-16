// Packages
import { v4 as uuid } from "uuid";

// Components
import Dialog from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    cancelButtonText: "Cancel",
    description:
      "Make changes to your profile here. Click save when you're done.",
    defaultOpen: false,
    forceMount: false,
    id: uuid(),
    modal: true,
    preventScroll: true,
    submitButtonText: "Save Changes",
    title: "Edit profile",
  },
};
