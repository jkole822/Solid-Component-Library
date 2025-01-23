import { faker } from "@faker-js/faker";
import Collapsible from "./story";
import { IconStyles } from "../../styles";
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

const args = {
  buttonContent,
  defaultOpen: false,
  disabled: false,
  forceMount: false,
};

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto sm:w-72",
  },
};
