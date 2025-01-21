import { oneLine } from "common-tags";

export const ButtonStyles = `
accordion-button
bg-neutral-secondary-700
cursor-pointer
flex
flex-grow
font-medium
items-center
justify-between
leading-none
outline-none
px-5
py-5
text-left
text-neutral-primary-200
transition-colors

focus-visible:text-primary-400

hover:bg-neutral-secondary-600

[&_.accordion-trigger-icon]:ease-[cubic-bezier(0.87,0,0.13,1)]
[&_.accordion-trigger-icon]:duration-300
[&_.accordion-trigger-icon]:transition-all

[&[data-expanded]_.accordion-trigger-icon]:rotate-180
`;

export const ContainerStyles = oneLine`
accordion-container
bg-neutral-secondary-700
rounded-lg
`;

export const ContentStyles = oneLine`
accordion-content
animate-accordionSlideUp
bg-primary-200
overflow-hidden
shadow-[inset_0px_1px_0px_rgb(var(--color-neutral-primary-400))]
text-sm
text-neutral-secondary-700

[&[data-expanded]]:animate-accordionSlideDown
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
