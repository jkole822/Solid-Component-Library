// Packages
import { faker } from "@faker-js/faker";

// Components
import Collapsible from "./story";

// Styles
import { IconStyles } from "../../styles";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonContent = () => (
  <div>
    <span class="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" class={IconStyles}></i>
  </div>
);

export const Basic: Story = {
  args: {
    buttonContent,
    defaultOpen: false,
    disabled: false,
    forceMount: false,
  },
};
