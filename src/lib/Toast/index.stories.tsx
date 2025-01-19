import Toast from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
