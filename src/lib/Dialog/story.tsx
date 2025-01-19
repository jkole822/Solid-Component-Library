// Packages
import { createSignal } from "solid-js";

// Components
import Button from "../Button";
import Dialog from ".";
import Input from "../Input";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

export default function DialogStory({
  open: _,
  onOpenChange: __,
  ...rest
}: Props) {
  const [name, setName] = createSignal<string | null>("");
  const [open, setOpen] = createSignal(false);
  const [username, setUsername] = createSignal<string | null>("");

  const handleSubmit = () => {
    console.log("Dialog Submit");
    if (name() && username()) setOpen(false);
  };

  const Trigger = () => (
    <Button onClick={() => setOpen(!open())} variant={ButtonVariantsEnum.fill}>
      Open Dialog
    </Button>
  );

  return (
    <>
      <Dialog
        {...rest}
        onOpenChange={setOpen}
        onSubmit={handleSubmit}
        open={open}
        trigger={<Trigger />}
      >
        <>
          <Input
            autoComplete={AutoCompleteEnum.name}
            className="mt-8"
            id="name"
            inputClass="[&_~_label]:!bg-zinc-900"
            name="Name"
            onChange={setName}
            required
            value={name}
          />
          <Input
            autoComplete={AutoCompleteEnum.username}
            className="mt-6"
            id="username"
            inputClass="[&_~_label]:!bg-zinc-900"
            name="Username"
            onChange={setUsername}
            required
            value={username}
          />
        </>
      </Dialog>
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>Name: {name()}</p>
      <p class={PararaphStyles}>Username: {username()}</p>
    </>
  );
}
