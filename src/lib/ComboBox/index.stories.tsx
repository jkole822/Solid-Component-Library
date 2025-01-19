import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import ComboBox from "./story";
import { AutoCompleteEnum } from "../Input/types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "ComboBox",
  component: ComboBox,
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
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  faker.lorem.word(),
  faker.lorem.words(2),
  faker.lorem.word(),
  faker.lorem.words(3),
  faker.lorem.word(),
];

const args = {
  autoComplete: AutoCompleteEnum.off,
  id: uuid(),
  label: faker.lorem.word(),
  name: faker.lorem.word(),
  options,
  placeholder: faker.lorem.words(2),
  required: true,
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
