// Packages
import { Progress as KobalteProgress } from "@kobalte/core/progress";

// Styles
import { ContainerStyles, FillStyles, LabelStyles } from "./styles";

// Types
import type { Props } from "./types";

export default function Progress({
  className = "",
  label,
  value,
  ...rest
}: Props) {
  return (
    <KobalteProgress {...rest} value={value()} class={className}>
      <KobalteProgress.Label class={LabelStyles}>{label}</KobalteProgress.Label>
      <KobalteProgress.Track class={ContainerStyles}>
        <KobalteProgress.Fill class={FillStyles} />
      </KobalteProgress.Track>
    </KobalteProgress>
  );
}
