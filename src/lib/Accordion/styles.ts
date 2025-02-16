import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
accordion-button
bg-neutral-secondary-900
cursor-pointer
flex
grow
font-medium
items-center
justify-between
leading-none
outline-hidden
p-5
text-left
text-neutral-primary-200
transition-colors

disabled:opacity-25
disabled:cursor-not-allowed
disabled:text-neutral-primary-200

focus-visible:text-primary-500

hover:bg-neutral-secondary-900/50
hover:text-primary-400

[&_.accordion-trigger-icon]:ease-[cubic-bezier(0.87,0,0.13,1)]
[&_.accordion-trigger-icon]:duration-300
[&_.accordion-trigger-icon]:transition-all

[&[data-expanded]_.accordion-trigger-icon]:rotate-180
`;

export const ContainerStyles = oneLine`
accordion-container
bg-neutral-secondary-800
rounded-lg
`;

export const ContentStyles = oneLine`
accordion-content
animate-accordion-slide-up
bg-neutral-secondary-900/25
overflow-hidden
text-sm
text-neutral-secondary-200

data-expanded:animate-accordion-slide-down
`;

export const DescriptionStyles = oneLine`
accordion-description
px-5
py-4
`;

export const HeadingStyles = oneLine`
accordion-heading
flex
`;

export const SectionStyles = oneLine`
accordion-section
overflow-hidden
transition-colors

first:rounded-t-lg

last:rounded-b-lg
`;
