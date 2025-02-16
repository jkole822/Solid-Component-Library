// Packages
import { Pagination as KobaltePagination } from "@kobalte/core/pagination";
import { mergeProps, Show, splitProps } from "solid-js";

// Styles
import { ButtonStyles, ContainerStyles } from "./styles";

// Types
import { Props } from "./types";

export default function Pagination(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "ariaLabel",
    "className",
    "ellipsis",
    "hideNextButton",
    "hidePreviousButton",
    "page",
  ]);

  return (
    <KobaltePagination
      {...rest}
      aria-label={props.ariaLabel}
      class={`${props.className} ${ContainerStyles}`}
      page={props.page()}
      itemComponent={({ page }) => (
        <KobaltePagination.Item class={ButtonStyles} page={page}>
          {page}
        </KobaltePagination.Item>
      )}
      ellipsisComponent={() =>
        !!props.ellipsis ? (
          <KobaltePagination.Ellipsis
            class={`pagination-ellipsis ${ButtonStyles}`}
          >
            {props.ellipsis}
          </KobaltePagination.Ellipsis>
        ) : (
          <></>
        )
      }
    >
      <Show when={!props.hidePreviousButton}>
        <KobaltePagination.Previous class={ButtonStyles}>
          Previous
        </KobaltePagination.Previous>
      </Show>
      <KobaltePagination.Items />
      <Show when={!props.hideNextButton}>
        <KobaltePagination.Next class={ButtonStyles}>
          Next
        </KobaltePagination.Next>
      </Show>
    </KobaltePagination>
  );
}
