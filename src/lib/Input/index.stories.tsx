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
    max: { control: "number" },
    min: { control: "number" },
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
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  id: uuid(),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
  required: true,
  type: InputTypeEnum.text,
};

export const Basic: Story = {
  args,
};

export const DateField: Story = {
  args: {
    ...args,
    type: InputTypeEnum.date,
  },
};

export const EmailField: Story = {
  args: {
    ...args,
    autoComplete: AutoCompleteEnum.email,
    pattern: "^\[a-zA-Z0-9._%+\\-\]+@\[a-zA-Z0-9.\\-\]+\\.\[a-zA-Z\]\{2,\}$",
    type: InputTypeEnum.email,
  },
};

export const NumberField: Story = {
  args: {
    ...args,
    min: 0,
    max: 100,
    type: InputTypeEnum.number,
  },
};

export const PasswordField: Story = {
  args: {
    ...args,
    autoComplete: AutoCompleteEnum.newPassword,
    minLength: 8,
    maxLength: 16,
    type: InputTypeEnum.password,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
