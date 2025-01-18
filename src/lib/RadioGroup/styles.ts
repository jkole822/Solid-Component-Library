import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
flex-col
gap-2
radio-group-container
w-fit

[&:focus-within_.radio-group-label]:text-blue-300
`;

export const GliderContainerStyles = oneLine`
absolute
[background:linear-gradient(0deg,_rgba(0,0,0,0)_0%,_rgb(27,27,27)_50%,_rgba(0,0,0,0)_100%)]
bottom-0
left-0
radio-group-glider-container
top-0
w-px
`;

export const GliderStyles = oneLine`
[background:linear-gradient(0deg,_rgba(0,0,0,0)_0%,_rgb(var(--color-blue-500))_50%,_rgba(0,0,0,0)_100%)]
[transition-timing-function:cubic-bezier(0.37,1.95,0.66,0.56)]
duration-500
radio-group-glider
relative
transition-all
w-full

after:[background:linear-gradient(90deg,_rgba(var(--color-blue-500)_/_0.3)_0%,_rgba(0,_0,_0,_0)_100%)]
after:absolute
after:h-full
after:left-0
after:w-40

before:-translate-y-1/2
before:absolute
before:bg-blue-500
before:blur-[10px]
before:h-[60%]
before:top-1/2
before:w-[300%]
`;

export const InputStyles = oneLine`
appearance-none
cursor-pointer
radio-group-input

[&[data-checked]_~_label]:text-blue-500
`;

export const ItemStyles = oneLine`
radio-group-item
p-3
`;

export const ItemLabelStyles = oneLine`
cursor-pointer
duration-300
ease-in-out
p-3
radio-group-item-label
relative
text-slate-400
transition-all
`;

export const LabelStyles = oneLine`
duration-300
ease-in-out
font-extrabold
radio-group-label
tracking-wider
uppercase
transition-all
`;

export const OptionContainerStyles = oneLine`
flex
flex-col
radio-group-option-container
relative
pl-2
`;
