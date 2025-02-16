// Packages
import { createSignal, splitProps } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button";
import Input from "../Input";
import Tabs from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";
import type { Accessor, Setter } from "solid-js";
import { ButtonVariantsEnum } from "../Button/types";

export default function TabsStory(props: Props) {
  const [_, rest] = splitProps(props, ["items"]);
  const [valueOne, setValueOne] = createSignal<number | string | null>("");
  const [valueTwo, setValueTwo] = createSignal<number | string | null>("");
  const [valueThree, setValueThree] = createSignal<number | string | null>("");

  const idOne = uuid();
  const idTwo = uuid();
  const idThree = uuid();

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
    <>
      <Tabs
        {...rest}
        defaultValue={idTwo}
        items={[
          {
            children: <TabContent onChange={setValueOne} value={valueOne} />,
            id: idOne,
            label: faker.lorem.word(),
          },
          {
            children: <TabContent onChange={setValueTwo} value={valueTwo} />,
            id: idTwo,
            label: faker.lorem.word(),
          },
          {
            children: (
              <TabContent onChange={setValueThree} value={valueThree} />
            ),
            id: idThree,
            label: faker.lorem.word(),
          },
        ]}
      />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>Value One: {valueOne()}</p>
      <p class={PararaphStyles}>Value Two: {valueTwo()}</p>
      <p class={PararaphStyles}>Value Three: {valueThree()}</p>
    </>
  );
}
