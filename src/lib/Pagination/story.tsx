// Packages
import { createSignal } from "solid-js";

// Components
import Pagination from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function PaginationStory({
  page: _,
  onPageChange: __,
  ...rest
}: Props) {
  const [page, setPaged] = createSignal(1);

  return (
    <>
      <Pagination {...rest} onPageChange={setPaged} page={page} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{page()}</p>
    </>
  );
}
