// Packages
import { Pagination as KobaltePagination } from "@kobalte/core/pagination";

// Styles
import { ButtonStyles, ContainerStyles } from "./styles";

// Types
import { Props } from "./types";

export default function Pagination({
  ariaLabel,
  className = "",
  ellipsis,
  page,
  ...rest
}: Props) {
  return (
    <KobaltePagination
      {...rest}
      aria-label={ariaLabel}
      class={`${className} ${ContainerStyles}`}
      page={page()}
      itemComponent={(props) => (
        <KobaltePagination.Item class={ButtonStyles} page={props.page}>
          {props.page}
        </KobaltePagination.Item>
      )}
      ellipsisComponent={() => (
        <KobaltePagination.Ellipsis
          class={`pagination-ellipsis ${ButtonStyles}`}
        >
          {ellipsis}
        </KobaltePagination.Ellipsis>
      )}
    >
      <KobaltePagination.Previous class={ButtonStyles}>
        Previous
      </KobaltePagination.Previous>
      <KobaltePagination.Items />
      <KobaltePagination.Next class={ButtonStyles}>Next</KobaltePagination.Next>
    </KobaltePagination>
  );
}
