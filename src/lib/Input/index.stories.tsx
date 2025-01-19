import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import Input from "./story";
import { AutoCompleteEnum, InputTypeEnum } from "../Input/types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    autoComplete: {
      control: {
        type: "select",
      },
      options: [
        AutoCompleteEnum.currentPassword,
        AutoCompleteEnum.email,
        AutoCompleteEnum.name,
        AutoCompleteEnum.newPassword,
        AutoCompleteEnum.off,
        AutoCompleteEnum.username,
      ],
    },
    disabled: { control: "boolean" },
    max: { control: "number" },
    min: { control: "number" },
    required: { control: "boolean" },
    type: {
      control: {
        type: "select",
      },
      options: [
        InputTypeEnum.date,
        InputTypeEnum.email,
        InputTypeEnum.number,
        InputTypeEnum.password,
        InputTypeEnum.text,
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  autoComplete: AutoCompleteEnum.off,
  id: uuid(),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
  required: true,
  type: InputTypeEnum.text,
};

export const Basic: Story = {
  args,
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
