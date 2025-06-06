// Packages
import { faker } from "@faker-js/faker";

// Components
import RadioGroup from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";
import {
  RadioGroupOrientationEnum,
  RadioGroupValidationStateEnum,
} from "./types";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    orientation: {
      control: "select",
      options: [
        RadioGroupOrientationEnum.Horizontal,
        RadioGroupOrientationEnum.Vertical,
      ],
    },
    validationState: {
      control: "select",
      options: [
        RadioGroupValidationStateEnum.Valid,
        RadioGroupValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultValue = faker.lorem.word();

const items = [faker.lorem.words(2), defaultValue, faker.lorem.words(3)];

const args = {
  defaultValue,
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  items,
  name: faker.lorem.word(),
  orientation: RadioGroupOrientationEnum.Vertical,
  readOnly: false,
  required: false,
  validationState: RadioGroupValidationStateEnum.Valid,
};

export const Vertical: Story = {
  args,
};

export const Horizontal = {
  args: {
    ...args,
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};
