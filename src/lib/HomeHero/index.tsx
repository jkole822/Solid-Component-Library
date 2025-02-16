// Packages
import { createSignal, For, onMount, Show } from "solid-js";

// Components
import Button from "../Button";
import Tooltip from "../Tooltip";

// Styles
import {
  BottomCTAContainerStyles,
  BottomCTATextStyles,
  ButtonContainerStyles,
  ButtonIconStyles,
  ButtonStyles,
  CarouselBackgroundImageStyles,
  CarouselImagesContainerStyles,
  CarouselLinkStyles,
  CarouselLinksContainerStyles,
  CarouselNumberBackStyles,
  CarouselNumberFixedStyles,
  CarouselNumberStyles,
  CarouselTitleStyles,
  ContainerStyles,
  CursorOneStyles,
  CursorThreeStyles,
  CursorTwoStyles,
  FloatingLinkStyles,
  FloatingLinkTriggerStyles,
  ScrollToTopStyles,
  SectionDescriptionStyles,
  SectionFlexRowStyles,
  SectionHeaderStyles,
  SectionHeadingStyles,
  SectionInnerContainerStyles,
  SectionParallaxStyles,
  SectionStyles,
  ShadowTitleStyles,
} from "./styles";

// Utils
import { handleCursor, handleParallax, handleScrollToTop } from "./utils";

// Types
import type { Props } from "./types";
import { ButtonVariantsEnum } from "../Button/types";

export default function HomeHero(props: Props) {
  const [activeItem, setActiveItem] = createSignal(0);

  const handleMouseEnter = (index: number) => {
    setActiveItem(index);
  };

  const handleNext = () => {
    if (activeItem() === props.items.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem() + 1);
    }
  };

  const handlePrevious = () => {
    if (activeItem() === 0) {
      setActiveItem(props.items.length - 1);
    } else {
      setActiveItem(activeItem() - 1);
    }
  };

  onMount(() => {
    handleCursor();
    handleParallax(props.parallaxBackgroundImages);
    handleScrollToTop();
  });

  return (
    <div class={ContainerStyles}>
      <div class={ShadowTitleStyles}>{props.shadowTitle}</div>

      <For each={props.parallaxBackgroundImages}>
        {(image, index) => (
          <div
            class={`${SectionParallaxStyles} parallax-image-${index()}`}
            style={`background-image: url('${image}')`}
          ></div>
        )}
      </For>

      <div class={`${SectionStyles} h-screen`}>
        <div class={SectionHeaderStyles}>
          <div class={SectionInnerContainerStyles}>
            <div class={SectionFlexRowStyles}>
              <div class="basis-full max-w-full text-center parallax-fade-top">
                <p class={SectionDescriptionStyles}>{props.eyebrow}</p>
                <h2 class={SectionHeadingStyles}>
                  {props.heading}
                  <Show when={props.headingSecondLine}>
                    <br />
                    {props.headingSecondLine}
                  </Show>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class={`${SectionStyles} h-screen z-[100]`}>
        <ul class={CarouselLinksContainerStyles}>
          <For each={props.items}>
            {({ cta }, index) => (
              <li
                class={CarouselLinkStyles}
                onMouseEnter={() => handleMouseEnter(index())}
              >
                <a
                  {...cta}
                  class={`${index() === activeItem() ? "active" : ""} hover-target`}
                >
                  {cta.title}
                </a>
              </li>
            )}
          </For>
        </ul>

        <ul class={CarouselImagesContainerStyles}>
          <For each={props.items}>
            {({ image, title }, index) => (
              <li class={index() === activeItem() ? "show" : ""}>
                <div class={CarouselBackgroundImageStyles}>
                  <img {...image} />
                  <div class={ButtonContainerStyles}>
                    <Button
                      className={ButtonStyles}
                      onClick={handlePrevious}
                      variant={ButtonVariantsEnum.outline}
                    >
                      <i aria-hidden="true" class={ButtonIconStyles}></i>
                    </Button>
                    <Button
                      className={ButtonStyles}
                      onClick={handleNext}
                      variant={ButtonVariantsEnum.outline}
                    >
                      <i
                        aria-hidden="true"
                        class={`${ButtonIconStyles} rotate-180`}
                      ></i>
                    </Button>
                  </div>
                </div>
                <div class={CarouselNumberBackStyles}>0{index() + 1}</div>
                <div class={CarouselNumberStyles}>0{index() + 1}</div>
                <div class={CarouselNumberFixedStyles}>
                  0{props.items.length}
                </div>
                <div class={CarouselTitleStyles}>{title}</div>
              </li>
            )}
          </For>
        </ul>
      </div>

      <Show when={props.bottomLinkCTA}>
        <div
          class={`${SectionStyles} bg-neutral-secondary-900 py-[100px] overflow-hidden z-[200]`}
        >
          <div class={SectionInnerContainerStyles}>
            <div class={`${SectionFlexRowStyles} justify-center`}>
              <div class="text-center md:basis-[58.3333%] md:max-w-[58.3333%]">
                <a {...props.bottomLinkCTA} class="hover-target">
                  <div class={BottomCTAContainerStyles}>
                    <p class={BottomCTATextStyles}>
                      {props.bottomLinkCTA?.title}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <div class={`${ScrollToTopStyles} hover-target`}>
        <i aria-hidden="true" class="fa-solid fa-arrow-up"></i>
      </div>

      <div class={CursorOneStyles} id="cursor-one"></div>
      <div class={CursorTwoStyles} id="cursor-two"></div>
      <div class={CursorThreeStyles} id="cursor-three"></div>

      <Show when={props.floatingCTA && props.floatingCTAChildren}>
        <Tooltip
          className="z-[251]"
          text={`Navigate to ${props.floatingCTA?.title}`}
          triggerClass={FloatingLinkStyles}
        >
          <Button {...props.floatingCTA} className={FloatingLinkTriggerStyles}>
            {props.floatingCTAChildren}
          </Button>
        </Tooltip>
      </Show>
    </div>
  );
}
