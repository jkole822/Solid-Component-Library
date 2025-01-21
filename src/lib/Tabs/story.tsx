// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button";
import Input from "../Input";
import Tabs from ".";

// Types
import type { Props } from "./types";
import type { Accessor, Setter } from "solid-js";
import { ButtonVariantsEnum } from "../Button/types";

export default function TabsStory({ items: _, ...rest }: Props) {
  const [valueOne, setValueOne] = createSignal<number | string | null>("");
  const [valueTwo, setValueTwo] = createSignal<number | string | null>("");
  const [valueThree, setValueThree] = createSignal<number | string | null>("");

  const defaultTabId = uuid();

  const TabContent = ({
    onChange,
    value,
  }: {
    onChange: Setter<number | string | null>;
    value: Accessor<number | string | null>;
  }) => (
    <>
      <p class="mb-5 text-neutral-primary-300">{faker.lorem.sentence()}</p>
      <fieldset class="mb-4 flex w-full flex-col justify-start">
        <Input
          id={uuid()}
          inputClass="[&_~_label]:!bg-neutral-secondary-950"
          name={faker.lorem.words()}
          onChange={onChange}
          value={value}
        />
      </fieldset>
      <div class="mt-5 flex justify-end">
        <Button variant={ButtonVariantsEnum.outline}>
          {faker.lorem.word()}
        </Button>
      </div>
    </>
  );

  return (
    <Tabs
      {...rest}
      defaultValue={defaultTabId}
      items={[
        {
          children: <TabContent onChange={setValueOne} value={valueOne} />,
          id: uuid(),
          label: faker.lorem.word(),
        },
        {
          children: <TabContent onChange={setValueTwo} value={valueTwo} />,
          id: defaultTabId,
          label: faker.lorem.word(),
        },
        {
          children: <TabContent onChange={setValueThree} value={valueThree} />,
          id: uuid(),
          label: faker.lorem.word(),
        },
      ]}
    />
  );
}
