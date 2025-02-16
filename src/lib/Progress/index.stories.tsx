// Packages
import { faker } from "@faker-js/faker";

// Components
import Progress from "./story";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    getLabelValue: (params: { value: number; min: number; max: number }) =>
      console.log(params),
    label: faker.lorem.word(),
    indeterminate: false,
    minValue: 0,
    maxValue: 100,
  },
};
