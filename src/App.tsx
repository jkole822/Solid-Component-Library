// Packages
import { createSignal, Index, Show } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Accordion from "./lib/Accordion";
import Button from "./lib/Button";
import Checkbox from "./lib/Checkbox";
import ComboBox from "./lib/ComboBox";
import Dialog from "./lib/Dialog";
import Input from "./lib/Input";
import Pagination from "./lib/Pagination";
import Popover from "./lib/Popover";
import Progress from "./lib/Progress";
import RadioGroup from "./lib/RadioGroup";
import Select from "./lib/Select";
import Slider from "./lib/Slider";
import Switch from "./lib/Switch";
import Toast from "./lib/Toast";
import Tooltip from "./lib/Tooltip";

// Styles
import { HeadingStyles, IconStyles, PararaphStyles } from "./styles";

// Types
import { ButtonVariantsEnum } from "./lib/Button/types";
import { AutoCompleteEnum } from "./lib/Input/types";
import { HeadingLevelEnum } from "./types";
import type { ToastUpdate } from "./lib/Toast/types";

function App() {
  const [checked, setChecked] = createSignal(false);
  const [comboBoxValue, setComboBoxValue] = createSignal("");
  const [dialogOpen, setDialogOpen] = createSignal(false);
  const [dialogName, setDialogName] = createSignal("");
  const [dialogUsername, setDialogUsername] = createSignal("");
  const [inputValue, setInputValue] = createSignal("");
  const [page, setPage] = createSignal(1);
  const [progressValue, setProgressValue] = createSignal(0);
  const [radioGroupValue, setRadioGroupValue] = createSignal("");
  const [sliderValue, setSliderValue] = createSignal([30]);
  const [sliderValues, setSliderValues] = createSignal([25, 75]);
  const [switchChecked, setSwitchedChecked] = createSignal(false);
  const [toasts, setToasts] = createSignal<ToastUpdate[]>([]);

  const accordionItems = [
    {
      id: "item-1",
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
    },
    {
      id: "item-2",
      title: faker.lorem.words(2),
      description: faker.lorem.sentence(),
    },
    {
      id: "item-3",
      title: faker.lorem.words(4),
      description: faker.lorem.sentence(),
    },
  ];

  const comboBoxOptions = [
    faker.lorem.word(),
    faker.lorem.words(2),
    faker.lorem.word(),
    faker.lorem.words(3),
    faker.lorem.word(),
  ];

  const progress = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  progress(1000).then(() => {
    setProgressValue(100);
  });

  const isToastUpdateDisabled = () => toasts().length === 0;

  const ButtonContent = () => (
    <>
      <span class="mr-2">{faker.lorem.word()}</span>
      <i aria-hidden="true" class={IconStyles}></i>
    </>
  );

  const DialogContent = () => (
    <>
      <Input
        autoComplete={AutoCompleteEnum.name}
        className="mx-auto mt-8 !w-full"
        id="name"
        inputClass="[&_~_label]:!bg-zinc-900 w-full"
        name="Name"
        onChange={setDialogName}
        required
        value={dialogName}
      />
      <Input
        autoComplete={AutoCompleteEnum.username}
        className="mx-auto mt-6 !w-full"
        id="username"
        inputClass="[&_~_label]:!bg-zinc-900 w-full"
        name="Username"
        onChange={setDialogUsername}
        required
        value={dialogUsername}
      />
    </>
  );

  return (
    <div class="min-h-screen">
      <h2 class={`${HeadingStyles} !mt-0`}>Accordion</h2>
      <Accordion
        className="w-[500px]"
        defaultValue="item-1"
        headingLevel={HeadingLevelEnum.Three}
        items={accordionItems}
      />
      <h2 class={HeadingStyles}>Buttons</h2>
      <p class={PararaphStyles}>Fill Variant</p>
      <Button
        className="block mx-auto"
        onClick={() => console.log("click")}
        variant={ButtonVariantsEnum.fill}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Fill Disabled Variant</p>
      <Button
        className="block mx-auto"
        disabled
        onClick={() => console.log("click")}
        variant={ButtonVariantsEnum.fill}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Outline Variant</p>
      <Button
        className="block mx-auto"
        onClick={() => console.log("click")}
        variant={ButtonVariantsEnum.outline}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Outline Disabled Variant</p>
      <Button
        className="block mx-auto"
        disabled
        onClick={() => console.log("click")}
        variant={ButtonVariantsEnum.outline}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Line One Variant</p>
      <Button
        className="block mx-auto"
        href="https://docs.solidjs.com/"
        target="_blank"
        variant={ButtonVariantsEnum.lineOne}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Line One Disabled Variant</p>
      <Button
        className="block mx-auto"
        disabled
        href="https://docs.solidjs.com/"
        target="_blank"
        variant={ButtonVariantsEnum.lineOne}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Line Two Variant</p>
      <Button
        className="block mx-auto"
        href="https://docs.solidjs.com/"
        target="_blank"
        variant={ButtonVariantsEnum.lineTwo}
      >
        <ButtonContent />
      </Button>
      <p class={PararaphStyles}>Line Two Disabled Variant</p>
      <Button
        className="block mx-auto"
        disabled
        href="https://docs.solidjs.com/"
        target="_blank"
        variant={ButtonVariantsEnum.lineTwo}
      >
        <ButtonContent />
      </Button>
      <h2 class={HeadingStyles}>Checkbox</h2>
      <Checkbox
        className="mx-auto"
        checked={checked}
        label={faker.lorem.word()}
        onChange={() => setChecked(!checked())}
      />
      <p class={PararaphStyles}>Disabled</p>
      <Checkbox
        className="mx-auto"
        checked={checked}
        disabled
        label={faker.lorem.word()}
        onChange={() => setChecked(!checked())}
      />
      <h2 class={HeadingStyles}>Combo Box</h2>
      <ComboBox
        className="mx-auto"
        id={uuid()}
        inputClass="w-72"
        name={faker.lorem.word()}
        onChange={setComboBoxValue}
        options={comboBoxOptions}
        placeholder={faker.lorem.words()}
        required
        value={comboBoxValue}
      />
      <p class={PararaphStyles}>Disabled</p>
      <ComboBox
        className="mx-auto"
        disabled
        id={uuid()}
        inputClass="w-72"
        name={faker.lorem.word()}
        onChange={setComboBoxValue}
        options={comboBoxOptions}
        placeholder={faker.lorem.words()}
        required
        value={comboBoxValue}
      />
      <h2 class={HeadingStyles}>Dialog</h2>
      <Button
        className="block mx-auto"
        onClick={() => setDialogOpen(!dialogOpen())}
        variant={ButtonVariantsEnum.fill}
      >
        Open Dialog
      </Button>
      <Dialog
        cancelButtonText="Cancel"
        description="Make changes to your profile here. Click save when you're done."
        dialogContent={<DialogContent />}
        id={uuid()}
        onOpenChange={setDialogOpen}
        onSubmit={() => {
          console.log("Name:", dialogName());
          console.log("Username:", dialogUsername());
        }}
        open={dialogOpen}
        submitButtonText="Save Changes"
        title="Edit profile"
      />
      <h2 class={HeadingStyles}>Input</h2>
      <Input
        autoComplete={AutoCompleteEnum.name}
        className="mx-auto w-fit"
        id={uuid()}
        inputClass="w-72"
        name={faker.lorem.word()}
        onChange={setInputValue}
        required
        value={inputValue}
      />
      <div class="font-bold mb-1 mt-4 text-blue-500 tracking-wide uppercase">
        Binding Check
      </div>
      <p class="mb-10 text-slate-200">{inputValue()}</p>
      <p class={PararaphStyles}>Disabled</p>
      <Input
        autoComplete={AutoCompleteEnum.name}
        className="mx-auto w-fit [&_.input-input]:w-72"
        disabled
        id={uuid()}
        name={faker.lorem.word()}
        onChange={setInputValue}
        value={inputValue}
      />
      <h2 class={HeadingStyles}>Pagination</h2>
      <Pagination
        ariaLabel={faker.lorem.words(3)}
        className="mx-auto"
        count={10}
        ellipsis={<span>...</span>}
        onPageChange={setPage}
        page={page}
        siblingCount={1}
      />
      <h2 class={HeadingStyles}>Popover</h2>
      <Popover
        ariaLabel={faker.lorem.words(3)}
        buttonContent={<span>Open Popover</span>}
        className="mx-auto"
        description="A UI toolkit for building accessible web apps and design systems with SolidJS."
        title="About Kobalte"
      >
        <DialogContent />
      </Popover>
      <p class={PararaphStyles}>Icon Variant</p>
      <Popover
        ariaLabel={faker.lorem.words(3)}
        buttonContent={<i aria-hidden="true" class="fa-solid fa-ghost"></i>}
        className="mx-auto"
        description="A UI toolkit for building accessible web apps and design systems with SolidJS."
        isIconButton
        title="About Kobalte"
      >
        <DialogContent />
      </Popover>
      <p class={PararaphStyles}>Disabled</p>
      <Popover
        ariaLabel={faker.lorem.words(3)}
        buttonContent={<span>Open Popover</span>}
        className="mx-auto"
        description="A UI toolkit for building accessible web apps and design systems with SolidJS."
        disabled
        title="About Kobalte"
      >
        <DialogContent />
      </Popover>
      <h2 class={HeadingStyles}>Progress</h2>
      <Progress
        className="mx-auto w-[500px]"
        label={faker.lorem.word()}
        value={progressValue}
      />
      <h2 class={HeadingStyles}>Radio Group</h2>
      <RadioGroup
        className="mx-auto"
        items={[faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)]}
        label={faker.lorem.word()}
        onChange={setRadioGroupValue}
        value={radioGroupValue}
      />
      <p class="font-bold mb-1 mt-4 text-blue-500 tracking-wide uppercase">
        Binding Check
      </p>
      <p class="mb-10 text-slate-200">{radioGroupValue()}</p>
      <h2 class={HeadingStyles}>Select</h2>
      <Select
        ariaLabel={faker.lorem.word()}
        id={uuid()}
        name={faker.lorem.word()}
        onChange={setComboBoxValue}
        options={comboBoxOptions}
        placeholder={faker.lorem.words(2)}
        required
        triggerClass="mx-auto w-fit"
        value={comboBoxValue}
      />
      <p class={PararaphStyles}>Disabled</p>
      <Select
        ariaLabel={faker.lorem.word()}
        disabled
        id={uuid()}
        name={faker.lorem.word()}
        onChange={setComboBoxValue}
        options={comboBoxOptions}
        placeholder={faker.lorem.words(2)}
        required
        triggerClass="mx-auto w-fit"
        value={comboBoxValue}
      />
      <h2 class={HeadingStyles}>Slider</h2>
      <Slider
        className="mx-auto"
        defaultValue={[30]}
        label={faker.lorem.word()}
        maxValue={100}
        minValue={0}
        onChange={setSliderValue}
        step={1}
        value={sliderValue}
      />
      <p class="font-bold mb-1 mt-4 text-blue-500 tracking-wide uppercase">
        Binding Check
      </p>
      <p class="mb-10 text-slate-200">{sliderValue()}</p>
      <p class={PararaphStyles}>Multiple Values</p>
      <Slider
        className="mx-auto"
        defaultValue={[25, 75]}
        label={faker.lorem.word()}
        maxValue={100}
        minValue={0}
        onChange={setSliderValues}
        step={1}
        value={sliderValues}
      />
      <p class="font-bold mb-1 mt-4 text-blue-500 tracking-wide uppercase">
        Binding Check
      </p>
      <p class="mb-10 text-slate-200">
        <Index each={sliderValues()}>
          {(value, index) => (
            <>
              <span>{value()}</span>
              <Show when={index === 0}>,&nbsp;</Show>
            </>
          )}
        </Index>
      </p>
      <h2 class={HeadingStyles}>Switch</h2>
      <Switch
        className="mx-auto"
        checked={switchChecked}
        label={faker.lorem.words(2)}
        onChange={() => setSwitchedChecked(!switchChecked())}
      />
      <p class={PararaphStyles}>Disabled</p>
      <Switch
        className="mx-auto"
        checked={switchChecked}
        disabled
        label={faker.lorem.words(2)}
        onChange={() => setSwitchedChecked(!switchChecked())}
      />
      <h2 class={HeadingStyles}>Toast</h2>
      <Toast toastUpdates={toasts} />
      <Button
        className="block mx-auto"
        onClick={() => {
          setToasts([
            ...toasts(),
            {
              description: faker.lorem.sentence(),
              id: uuid(),
              title: faker.lorem.words(2),
            },
          ]);
        }}
        variant={ButtonVariantsEnum.fill}
      >
        Create Toast
      </Button>
      <Button
        className="block mt-12 mx-auto"
        disabledAccessor={isToastUpdateDisabled}
        onClick={() => {
          const accessedToasts = toasts();

          if (accessedToasts.length > 0) {
            const randomToast =
              accessedToasts[Math.floor(Math.random() * accessedToasts.length)];

            setToasts([
              ...accessedToasts,
              {
                description: faker.lorem.sentence(),
                id: randomToast.id,
                title: faker.lorem.words(2),
              },
            ]);
          }
        }}
        variant={ButtonVariantsEnum.outline}
      >
        Update Random Post
      </Button>

      <h2 class={HeadingStyles}>Tooltip</h2>
      <Tooltip text={faker.lorem.sentence()} triggerClass="mx-auto">
        <Popover
          ariaLabel={faker.lorem.words(3)}
          buttonContent={<i aria-hidden="true" class="fa-solid fa-ghost"></i>}
          description="A UI toolkit for building accessible web apps and design systems with SolidJS."
          isIconButton
          title="About Kobalte"
        >
          <DialogContent />
        </Popover>
      </Tooltip>
    </div>
  );
}

export default App;
