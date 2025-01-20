import { faker } from "@faker-js/faker";
import { fn } from "@storybook/test";
import Button from ".";
import { ButtonVariantsEnum } from "./types";
import { IconStyles } from "../../styles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    variant: {
      control: {
        type: "select",
      },
      options: [
        ButtonVariantsEnum.fill,
        ButtonVariantsEnum.outline,
        ButtonVariantsEnum.lineOne,
        ButtonVariantsEnum.lineTwo,
      ],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonContent = () => (
  <>
    <span class="mr-2">{faker.lorem.word()}</span>
    <i aria-hidden="true" class={IconStyles}></i>
  </>
);

export const Fill: Story = {
  args: {
    children: ButtonContent,
    variant: ButtonVariantsEnum.fill,
  },
};

export const Outline: Story = {
  args: {
    children: ButtonContent,
    variant: ButtonVariantsEnum.outline,
  },
};

export const OutlineWithGlow: Story = {
  args: {
    children: ButtonContent,
    className: "mx-auto",
    showBottomGlow: true,
    variant: ButtonVariantsEnum.outline,
  },
};

export const LineOne: Story = {
  args: {
    children: ButtonContent,
    variant: ButtonVariantsEnum.lineOne,
  },
};

export const LineTwo: Story = {
  args: {
    children: ButtonContent,
    variant: ButtonVariantsEnum.lineTwo,
  },
};

export const WithClass: Story = {
  args: {
    children: ButtonContent,
    className: "mx-auto",
    variant: ButtonVariantsEnum.fill,
  },
};
