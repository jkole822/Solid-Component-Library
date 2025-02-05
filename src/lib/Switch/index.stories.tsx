import { faker } from "@faker-js/faker";
import Switch from "./story";
import { SwitchValidationStateEnum } from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    validationState: {
      control: "select",
      options: [
        SwitchValidationStateEnum.Valid,
        SwitchValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof Switch>;

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
  validationState: SwitchValidationStateEnum.Valid,
};

export const Basic: Story = {
  args,
};

export const Invalid: Story = {
  args: {
    ...args,
    required: true,
    validationState: SwitchValidationStateEnum.Invalid,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto",
  },
};
