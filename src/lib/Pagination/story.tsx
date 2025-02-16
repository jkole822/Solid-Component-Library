// Packages
import { createSignal } from "solid-js";

// Components
import Pagination from ".";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

export default function PaginationStory(props: Props) {
  const [page, setPaged] = createSignal(props.defaultPage ?? 1);

  return (
    <>
      <Pagination {...props} onPageChange={setPaged} page={page} />
      <p class={SubHeadingStyles}>Binding Check</p>
      <p class={PararaphStyles}>{page()}</p>
    </>
  );
}
