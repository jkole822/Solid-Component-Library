import { faker } from "@faker-js/faker";
import RadioGroup from "./story";
import {
  RadioGroupOrientationEnum,
  RadioGroupValidationStateEnum,
} from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: { control: "text" },
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

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const args = {
  disabled: false,
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  items,
  name: faker.lorem.word(),
  orientation: RadioGroupOrientationEnum.Vertical,
  readOnly: false,
  required: false,
  validationState: RadioGroupValidationStateEnum.Valid,
};

export const Basic: Story = {
  args,
};

export const HorizontalOrientation = {
  args: {
    ...args,
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "mx-auto",
  },
};
