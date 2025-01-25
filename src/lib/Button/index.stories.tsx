import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
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
    ariaControls: { control: "text" },
    ariaExpanded: { control: "boolean" },
    ariaHasPopup: {
      control: "select",
      options: [
        undefined,
        true,
        false,
        "dialog",
        "menu",
        "grid",
        "listbox",
        "tree",
        "false",
        "true",
      ],
    },
    ariaHidden: { control: "boolean" },
    ariaLabel: { control: "text" },
    href: { control: "text" },
    showBottomGlow: { control: "boolean" },
    tabIndex: {
      control: "select",
      options: [undefined, 0, -1],
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top", "framename"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
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

const args = {
  children: ButtonContent,
  disabled: false,
  id: uuid(),
  variant: ButtonVariantsEnum.fill,
};

export const Fill: Story = {
  args,
};

export const Outline: Story = {
  args: {
    ...args,
    variant: ButtonVariantsEnum.outline,
  },
};

export const OutlineWithGlow: Story = {
  args: {
    ...args,
    className: "mx-auto",
    showBottomGlow: true,
    variant: ButtonVariantsEnum.outline,
  },
};

export const LineOne: Story = {
  args: {
    ...args,
    href: "https://www.solidjs.com/",
    target: "_blank",
    variant: ButtonVariantsEnum.lineOne,
  },
};

export const LineTwo: Story = {
  args: {
    ...args,
    href: "https://www.solidjs.com/",
    target: "_blank",
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
