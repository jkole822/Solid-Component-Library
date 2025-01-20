import { faker } from "@faker-js/faker";
import RadioGroup from "./story";
import { RadioGroupOrientationEnum } from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: [
        RadioGroupOrientationEnum.Horizontal,
        RadioGroupOrientationEnum.Vertical,
      ],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const args = {
  items,
  label: faker.lorem.word(),
  orientation: RadioGroupOrientationEnum.Vertical,
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
