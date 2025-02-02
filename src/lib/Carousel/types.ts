import type { ImageProps } from "../../types";

interface CTA {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  title: string;
}

export interface CarouselItem {
  cta?: CTA;
  description?: string;
  image: ImageProps;
  title?: string;
}

export interface Props {
  className?: string;
  items: CarouselItem[];
}
