import type { HeadingLevels } from "../../types";
import type {Accessor, Setter} from "solid-js";

export interface AccordionItem {
  id: string;
  description: string;
  disabled?: boolean;
  title: string;
}

export interface Props {
  className?: string;
  collapsible?: boolean;
  defaultValue?: string[];
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  onChange?: Setter<string[]>;
  shouldFocusWrap?: boolean;
  value?: Accessor<string[]>;
}
