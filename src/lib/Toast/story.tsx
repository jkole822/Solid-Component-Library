// Packages
import { createSignal } from "solid-js";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button";
import Toast from ".";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { ToastUpdate } from "./types";

export default function ToastStory() {
  const [toasts, setToasts] = createSignal<ToastUpdate[]>([]);

  const handleCreateToast = () => {
    setToasts([
      ...toasts(),
      {
        description: faker.lorem.sentence(),
        id: uuid(),
        title: faker.lorem.words(2),
      },
    ]);
  };

  const handleUpdateRandomToast = () => {
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
  };

  const isToastUpdateDisabled = () => toasts().length === 0;

  return (
    <>
      <Toast toastUpdates={toasts} />
      <div class="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleCreateToast} variant={ButtonVariantsEnum.fill}>
          Create Toast
        </Button>
        <Button
          disabled={isToastUpdateDisabled()}
          onClick={handleUpdateRandomToast}
          variant={ButtonVariantsEnum.outline}
        >
          Update Random Post
        </Button>
      </div>
    </>
  );
}
