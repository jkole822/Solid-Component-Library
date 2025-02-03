import { faker } from "@faker-js/faker";
import Slider from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";
import { SliderOrientationEnum, SliderValidationStateEnum } from "./types";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: [
        SliderOrientationEnum.Horizontal,
        SliderOrientationEnum.Vertical,
      ],
    },
    validationState: {
      control: "select",
      options: [
        SliderValidationStateEnum.Valid,
        SliderValidationStateEnum.Invalid,
      ],
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultValue: [30],
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  getValueLabel: (params: { min: number; max: number; values: number[] }) =>
    console.log("Label Value", params),
  inverted: false,
  maxValue: 100,
  minValue: 0,
  minStepsBetweenThumbs: 0,
  name: faker.lorem.word(),
  onChangeEnd: (value: number[]) => console.log("Change End", value),
  orientation: SliderOrientationEnum.Horizontal,
  readOnly: false,
  required: false,
  step: 1,
  validationState: SliderValidationStateEnum.Valid,
};

export const Basic: Story = {
  args,
};

export const MultiValue: Story = {
  args: {
    ...args,
    defaultValue: [25, 75],
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
