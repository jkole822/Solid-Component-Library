// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Input from "../Input";
import Popover from "../Popover";
import Tooltip from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props } from "./types";

export default function TooltipStory(props: Props) {
  const [value, setValue] = createSignal<string | null>("");

  return (
    <>
      <Tooltip {...props}>
        <Popover
          ariaLabel={faker.lorem.words(3)}
          buttonContent={<i aria-hidden="true" class="fa-solid fa-ghost"></i>}
          description={faker.lorem.sentence()}
          isIconButton
          title={faker.lorem.words(2)}
        >
          <Input
            autoComplete={AutoCompleteEnum.name}
            className="mt-8"
            id={uuid()}
            inputClass="[&_~_label]:!bg-neutral-secondary-900"
            name={faker.lorem.word()}
            onChange={setValue}
            required
            value={value}
          />
        </Popover>
      </Tooltip>
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{value()}</p>
    </>
  );
}
