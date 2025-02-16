import { oneLine } from "common-tags";

export const ButtonStyles = ({
  isIconButton,
}: {
  isIconButton?: boolean;
}) => oneLine`
${
  isIconButton
    ? `
rounded-full
size-12
text-3xl
`
    : `
rounded-lg
font-bold
px-9
py-3
tracking-wide
`
}

bg-transparent
duration-300
ease-in-out
flex
items-center
justify-center
outline-hidden
overflow-hidden
popover-button
relative
ring-2
ring-primary-500
text-primary-500
tooltip-button
transition-all

data-disabled:bg-transparent
data-disabled:ring-neutral-primary-600
data-disabled:cursor-not-allowed
data-disabled:text-neutral-primary-600

[&:disabled:hover:before]:h-0

focus-visible:text-neutral-primary-50

hover:text-neutral-primary-50

before:absolute
before:bg-primary-500
before:bottom-0
before:duration-300
before:ease-in-out
before:h-0
before:left-0
before:transition-all
before:w-full
before:-z-10

focus-visible:before:h-full

hover:before:h-full
`;

export const CloseButtonStyles = oneLine`
absolute
appearance-none
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-hidden
p-1
popover-close-button
right-4
ring-primary-400
rounded-full
text-primary-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
animate-popover-fade-out
bg-neutral-secondary-900
duration-200
max-w-[min(calc(100vw-16px),_380px)]
origin-[var(--kb-popover-content-transform-origin)]
p-5
popover-content
relative
rounded-lg
shadow-xl
w-[calc(100vw-16px)]
z-10

data-expanded:animate-popover-fade-in
`;

export const DescriptionStyles = oneLine`
text-neutral-primary-400
text-sm
`;

export const TitleStyles = oneLine`
mb-6
font-bold
text-neutral-primary-200
w-[85%]
`;
