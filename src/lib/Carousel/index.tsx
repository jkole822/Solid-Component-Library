// Packages
import { createSignal, For, Show } from "solid-js";
import { createMediaQuery } from "@solid-primitives/media";

// Components
import Button from "../Button";

// Styles
import {
  ButtonContainerStyles,
  ButtonIconStyles,
  ButtonStyles,
  CardContentStyles,
  CardStyles,
  CarouselStyles,
  ContainerStyles,
  DescriptionStyles,
  HeadingStyles,
} from "./styles";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

export default function Carousel({ className, items }: Props) {
  const [cards, setCards] = createSignal(items);
  const isTwoExtraSmall = createMediaQuery("(min-width: 384px)");
  const isSmall = createMediaQuery("(min-width: 640px)");
  const isLarge = createMediaQuery("(min-width: 1024px)");
  const displacement = () => (isLarge() ? 220 : isSmall() ? 170 : 140);

  const handleNext = () => {
    setCards([...cards().slice(1), cards()[0]]);
  };

  const handlePrevious = () => {
    setCards([cards()[items.length - 1], ...cards().slice(0, -1)]);
  };

  return (
    <div class={`${className} ${ContainerStyles}`}>
      <div class={CarouselStyles}>
        <For each={cards()}>
          {({ cta, description, image, title }, index) => (
            <div
              class={CardStyles}
              style={{
                "background-image": `url('${image.src}')`,
                left:
                  index() >= 2
                    ? `calc(${isTwoExtraSmall() ? "50%" : "20px"} + ${(index() - 2) * displacement()}px)`
                    : 0,
              }}
            >
              <div class={CardContentStyles}>
                <h2 class={HeadingStyles}>{title}</h2>
                <p class={DescriptionStyles}>{description}</p>
                <Show when={cta}>
                  <Button {...cta} variant={ButtonVariantsEnum.outline}>
                    {cta?.title}
                  </Button>
                </Show>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class={ButtonContainerStyles}>
        <Button
          className={ButtonStyles}
          onClick={handlePrevious}
          variant={ButtonVariantsEnum.fill}
        >
          <i aria-hidden="true" class={ButtonIconStyles}></i>
        </Button>
        <Button
          className={ButtonStyles}
          onClick={handleNext}
          variant={ButtonVariantsEnum.fill}
        >
          <i aria-hidden="true" class={ButtonIconStyles}></i>
        </Button>
      </div>
    </div>
  );
}
