import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import ComboBox from "./story";
import {
  ComboBoxSelectionBehaviorEnum,
  ComboBoxTriggerModeEnum,
} from "./types";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
  argTypes: {
    selectionBehavior: {
      control: "select",
      options: [
        ComboBoxSelectionBehaviorEnum.Toggle,
        ComboBoxSelectionBehaviorEnum.Replace,
      ],
    },
    triggerMode: {
      control: "select",
      options: [
        ComboBoxTriggerModeEnum.Focus,
        ComboBoxTriggerModeEnum.Manual,
        ComboBoxTriggerModeEnum.Input,
      ],
    },
  },
} satisfies Meta<typeof ComboBox>;

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
  noResetInputOnBlur: false,
  options: generateItems(10),
  placeholder: faker.lorem.words(2),
  preventScroll: false,
  readOnly: false,
  removeOnBackspace: false,
  required: true,
  selectionBehavior: ComboBoxSelectionBehaviorEnum.Toggle,
  triggerMode: ComboBoxTriggerModeEnum.Manual,
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
    triggerMode: ComboBoxTriggerModeEnum.Input,
  },
};

export const WithClass: Story = {
  args: {
    ...args,
    className: "sm:w-72",
  },
};
