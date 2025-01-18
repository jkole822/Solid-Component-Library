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

[&_.trigger-content]:z-10

bg-transparent
duration-300
ease-in-out
flex
items-center
justify-center
outline-none
overflow-hidden
popover-button
relative
ring-2
ring-blue-500
text-blue-500
tooltip-button
transition-all

data-[disabled]:bg-transparent
data-[disabled]:ring-slate-600
data-[disabled]:cursor-not-allowed
data-[disabled]:text-slate-600

[&:disabled:hover:before]:h-0

focus-visible:text-slate-50

hover:text-slate-50

before:absolute
before:bg-blue-500
before:bottom-0
before:duration-300
before:ease-in-out
before:h-0
before:left-0
before:transition-all
before:w-full

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
outline-none
p-1
popover-close-button
right-4
ring-blue-400
rounded-full
text-blue-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-blue-100 
`;

export const ContentStyles = oneLine`
animate-popoverFadeOut
duration-200
bg-zinc-900
p-5
popover-content
relative
rounded-lg
shadow-xl
w-60
z-10

[&[data-expanded]]:animate-popoverFadeIn
`;

export const DescriptionStyles = oneLine`
text-slate-400
text-sm
`;

export const TitleStyles = oneLine`
mb-6
font-bold
text-slate-200
w-[85%]
`;
