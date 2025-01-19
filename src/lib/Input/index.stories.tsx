import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import Input from "./story";
import { AutoCompleteEnum } from "../Input/types";
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
    required: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  autoComplete: AutoCompleteEnum.off,
  id: uuid(),
  label: faker.lorem.word(),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
  required: true,
}

export const Basic: Story = {
  args
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72"
  }
}
