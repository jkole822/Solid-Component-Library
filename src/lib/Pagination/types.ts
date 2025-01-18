import { Accessor, JSX, Setter } from "solid-js";

export interface Props {
  ariaLabel: string;
  className?: string;
  count: number;
  ellipsis?: JSX.Element;
  onPageChange: Setter<number>;
  page: Accessor<number>;
  siblingCount?: number;
}
