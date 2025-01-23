import { faker } from "@faker-js/faker";
import Checkbox from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";
import { CheckboxValidationStateEnum } from "./types";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    validationState: {
      control: "select",
      options: [
        CheckboxValidationStateEnum.Valid,
        CheckboxValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultChecked: false,
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
  readOnly: false,
  required: false,
  validationState: CheckboxValidationStateEnum.Valid,
};

export const Basic: Story = {
  args,
};

export const Invalid: Story = {
  args: {
    ...args,
    required: true,
    validationState: CheckboxValidationStateEnum.Invalid,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto",
  },
};
