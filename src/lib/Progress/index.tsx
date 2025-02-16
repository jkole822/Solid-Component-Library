// Packages
import { Progress as KobalteProgress } from "@kobalte/core/progress";
import { mergeProps, splitProps } from "solid-js";

// Styles
import { ContainerStyles, FillStyles, LabelStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Progress(initialProps: Props) {
  const mergedProps = mergeProps({ className: "" }, initialProps);
  const [props, rest] = splitProps(mergedProps, [
    "className",
    "label",
    "value",
  ]);

  return (
    <KobalteProgress {...rest} value={props.value()} class={props.className}>
      <KobalteProgress.Label class={LabelStyles}>
        {props.label}
      </KobalteProgress.Label>
      <KobalteProgress.Track class={ContainerStyles}>
        <KobalteProgress.Fill class={FillStyles} />
      </KobalteProgress.Track>
    </KobalteProgress>
  );
}
