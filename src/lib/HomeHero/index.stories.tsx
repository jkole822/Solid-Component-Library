// Packages
import { faker } from "@faker-js/faker";

// Components
import HomeHero from ".";

// Types
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "HomeHero",
  component: HomeHero,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof HomeHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    bottomLinkCTA: {
      href: "#",
      title: faker.lorem.words(2),
    },
    eyebrow: faker.lorem.words(3),
    floatingCTA: {
      href: "#",
      target: "_blank",
      title: faker.lorem.words(3),
    },
    floatingCTAChildren: <i aria-hidden="true" class="fa-solid fa-ghost"></i>,
    heading: faker.lorem.word(),
    headingSecondLine: faker.lorem.words(3),
    items: [
      {
        cta: {
          href: "#",
          title: "light",
        },
        image: {
          alt: faker.lorem.words(3),
          src: "http://www.ivang-design.com/svg-load/parallax/light.jpg",
        },
        title: "graphic design, interaction",
      },
      {
        cta: {
          href: "#",
          title: "flare",
        },
        image: {
          alt: faker.lorem.words(3),
          src: "http://www.ivang-design.com/svg-load/parallax/flare.jpg",
        },
        title: "advertising, art direction",
      },
      {
        cta: {
          href: "#",
          title: "nature",
        },
        image: {
          alt: faker.lorem.words(3),
          src: "http://www.ivang-design.com/svg-load/parallax/nature.jpg",
        },
        title: "photography, retouching",
      },
      {
        cta: {
          href: "#",
          title: "fire",
        },
        image: {
          alt: faker.lorem.words(3),
          src: "http://www.ivang-design.com/svg-load/parallax/fire.jpg",
        },
        title: "photography, advertising",
      },
    ],
    parallaxBackgroundImages: [
      "http://www.ivang-design.com/svg-load/parallax/parallax-0.png",
      "http://www.ivang-design.com/svg-load/parallax/parallax-01.png",
    ],
    shadowTitle: faker.lorem.word(),
  },
};
