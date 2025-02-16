// Packages
import { faker } from "@faker-js/faker";

// Components
import Switch from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";
import { SwitchValidationStateEnum } from "./types";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
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

export const Basic: Story = {
  args: {
    defaultChecked: false,
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    name: faker.lorem.word(),
    readOnly: false,
    required: false,
    validationState: SwitchValidationStateEnum.Valid,
  },
};
