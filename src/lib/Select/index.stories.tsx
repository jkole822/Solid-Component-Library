import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import Select from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

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
  ariaLabel: faker.lorem.word(),
  id: uuid(),
  name: faker.lorem.word(),
  options,
  placeholder: faker.lorem.words(2),
  required: true,
};

export const Basic: Story = {
  args,
};

export const WithTriggerClass: Story = {
  args: {
    ...args,
    triggerClass: "sm:w-72",
  },
};
