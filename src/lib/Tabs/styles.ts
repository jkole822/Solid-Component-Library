import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
w-full
tabs-container

data-[orientation="vertical"]:flex
`;

export const ContentStyles = oneLine`
bg-neutral-secondary-950
grow
p-4
tabs-content
`;

export const IndicatorStyles = oneLine`
absolute
bg-primary-500
duration-300
ease-out
tabs-indicator
transition-all

data-[orientation="horizontal"]:bottom-px
data-[orientation="horizontal"]:h-0.5

data-[orientation="vertical"]:-right-px
data-[orientation="vertical"]:w-0.5
`;

export const ListStyles = oneLine`
bg-neutral-secondary-950
border-neutral-secondary-800
flex
relative
tabs-list

data-[orientation="horizontal"]:border-b-[1px]
data-[orientation="horizontal"]:items-center

data-[orientation="vertical"]:border-r-[1px]
data-[orientation="vertical"]:flex-col
`;

export const TriggerStyles = oneLine`
duration-200
ease-in-out
inline-block
p-4
outline-hidden
tabs-trigger
text-neutral-primary-300
transition-all

hover:bg-neutral-secondary-900
hover:text-neutral-primary-100

focus-visible:bg-neutral-secondary-900

data-disabled:bg-transparent!
data-disabled:opacity-50!
`;
