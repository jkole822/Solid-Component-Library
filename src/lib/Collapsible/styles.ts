import { oneLine } from "common-tags";

export const ContentContainerStyles = oneLine`
animate-collapsibleSlideUp
bg-neutral-secondary-900
collapsible-content-container
overflow-hidden
mx-auto
rounded-b-lg
text-neutral-primary-400
w-[calc(100%-32px)]

data-[expanded]:animate-collapsibleSlideDown
`;

export const ContentStyles = oneLine`
collapsible-content
flex
flex-col
gap-2
p-4
`;

export const TriggerStyles = oneLine`
bg-transparent
collapsible-trigger
duration-300
ease-out
flex
items-center
justify-between
mx-auto
outline-none
p-4
relative
border-2
border-neutral-primary-400
rounded-lg
text-neutral-primary-200
transition-all
w-full

data-[expanded]:border-primary-500
data-[expanded]:shadow-[0_0_20px_rgba(var(--color-primary-600)_/_0.8)]

disabled:cursor-not-allowed
disabled:opacity-50

focus-visible:border-primary-500

hover:cursor-pointer
hover:border-neutral-200
`;
