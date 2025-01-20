// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Input from "../Input";
import Popover from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props } from "./types";

export default function PopoverStory(props: Props) {
  const [value, setValue] = createSignal<number | string | null>("");

  return (
    <>
      <Popover {...props}>
        <Input
          autoComplete={AutoCompleteEnum.name}
          className="mt-8"
          id={uuid()}
          inputClass="[&_~_label]:!bg-zinc-900"
          name={faker.lorem.word()}
          onChange={setValue}
          required
          value={value}
        />
      </Popover>
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
