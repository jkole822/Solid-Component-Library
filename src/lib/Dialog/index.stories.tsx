import { v4 as uuid } from "uuid";
import Dialog from "./story";
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
    id: uuid(),
    submitButtonText: "Save Changes",
    title: "Edit profile",
  },
};
