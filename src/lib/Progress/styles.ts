import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
bg-neutral-primary-100/20
h-6
overflow-hidden
progress-container
relative
rounded-full
`;

export const FillStyles = oneLine`
bg-primary-500
h-full
progress-fill
w-[var(--kb-progress-fill-width)]
transition-colors

[&[data-progress="complete"]]:bg-primary-400
`;

export const LabelStyles = oneLine`
block
h-0
invisible
`;
