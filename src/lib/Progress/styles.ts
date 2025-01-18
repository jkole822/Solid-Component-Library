import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
bg-slate-100/10
h-6
overflow-hidden
progress-container
relative
rounded-full
`;

export const FillStyles = oneLine`
bg-blue-100
duration-[660ms]
ease-[cubic-bezier(0.65,0,0.35,1)]
h-full
progress-fill
transition-all
w-[var(--kb-progress-fill-width)]

[&[data-progress="complete"]]:bg-blue-500
`;

export const LabelStyles = oneLine`
block
h-0
invisible
`;
