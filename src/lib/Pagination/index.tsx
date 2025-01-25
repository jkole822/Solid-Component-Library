// Packages
import { Pagination as KobaltePagination } from "@kobalte/core/pagination";
import { Show } from "solid-js";

// Styles
import { ButtonStyles, ContainerStyles } from "./styles";

// Types
import { Props } from "./types";

export default function Pagination({
  ariaLabel,
  className = "",
  ellipsis,
  hideNextButton,
  hidePreviousButton,
  page,
  ...rest
}: Props) {
  return (
    <KobaltePagination
      {...rest}
      aria-label={ariaLabel}
      class={`${className} ${ContainerStyles}`}
      page={page()}
      itemComponent={({ page }) => (
        <KobaltePagination.Item class={ButtonStyles} page={page}>
          {page}
        </KobaltePagination.Item>
      )}
      ellipsisComponent={() =>
        !!ellipsis ? (
          <KobaltePagination.Ellipsis
            class={`pagination-ellipsis ${ButtonStyles}`}
          >
            {ellipsis}
          </KobaltePagination.Ellipsis>
        ) : (
          <></>
        )
      }
    >
      <Show when={!hidePreviousButton}>
        <KobaltePagination.Previous class={ButtonStyles}>
          Previous
        </KobaltePagination.Previous>
      </Show>
      <KobaltePagination.Items />
      <Show when={!hideNextButton}>
        <KobaltePagination.Next class={ButtonStyles}>
          Next
        </KobaltePagination.Next>
      </Show>
    </KobaltePagination>
  );
}
