import type { HeadingLevels } from "../../types";
import type { Accessor, JSX, Setter } from "solid-js";

export interface AccordionItem {
  id: string;
  content?: JSX.Element;
  description?: string;
  disabled?: boolean;
  title: string;
}

export interface Props {
  className?: string;
  collapsible?: boolean;
  defaultValue?: string[];
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  multiple?: boolean;
  onChange?: Setter<string[] | undefined>;
  shouldFocusWrap?: boolean;
  value?: Accessor<string[] | undefined>;
}
