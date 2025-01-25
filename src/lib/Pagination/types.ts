import { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  ariaLabel?: string;
  className?: string;
  count: number;
  defaultPage?: number;
  disabled?: boolean;
  ellipsis?: JSX.Element | null;
  fixedItems?: boolean | "no-ellipsis";
  hideNextButton?: boolean;
  hidePreviousButton?: boolean;
  onPageChange: Setter<number>;
  page: Accessor<number>;
  showFirst?: boolean;
  showLast?: boolean;
  siblingCount?: number;
}
