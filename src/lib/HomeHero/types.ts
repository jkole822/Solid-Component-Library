import type { ImageProps } from "../../types";
import type { JSX } from "solid-js";

interface CTA {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  title: string;
}

interface Item {
  cta: CTA;
  image: ImageProps;
  title: string;
}

export interface Props {
  bottomLinkCTA?: CTA;
  eyebrow: string;
  floatingCTA?: CTA;
  floatingCTAChildren?: JSX.Element;
  heading: string;
  headingSecondLine?: string;
  items: Item[];
  parallaxBackgroundImages: string[];
  shadowTitle: string;
}
