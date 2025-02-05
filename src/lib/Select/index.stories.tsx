import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import Select from "./story";
import type { Meta, StoryObj } from "storybook-solidjs";
import { SelectSelectionBehaviorEnum } from "./types";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    selectionBehavior: {
      control: "select",
      options: [
        SelectSelectionBehaviorEnum.Toggle,
        SelectSelectionBehaviorEnum.Replace,
      ],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: uuid(),
    label: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    disabled: index === 2,
  }));

const args = {
  allowDuplicateSelectionEvents: false,
  allowsEmptyCollection: false,
  ariaLabel: faker.lorem.word(),
  closeOnSelection: true,
  description: faker.lorem.sentence(),
  disabled: false,
  disallowEmptySelection: false,
  errorMessage: faker.lorem.sentence(),
  forceMount: false,
  id: uuid(),
  modal: false,
  multiple: false,
  name: faker.lorem.word(),
  options: generateItems(10),
  placeholder: faker.lorem.words(2),
  preventScroll: false,
  readOnly: false,
  required: true,
  selectionBehavior: SelectSelectionBehaviorEnum.Toggle,
  useInternalAndExternalValidation: false,
  virtualized: false,
};

export const Basic: Story = {
  args,
};

export const Multiple: Story = {
  args: {
    ...args,
    closeOnSelection: false,
    multiple: true,
  },
};

export const WithTriggerClass: Story = {
  args: {
    ...args,
    triggerClass: "sm:w-72",
  },
};
