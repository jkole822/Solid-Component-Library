import { oneLine } from "common-tags";

export const CheckContainerStyles = ({
  isSelected,
}: {
  isSelected: boolean;
}) => oneLine`
${isSelected ? "block" : "hidden"}

absolute
check
select-check-container
left-2
text-primary-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted]:text-primary-800
`;

export const ContainerStyles = oneLine`
flex
flex-col
gap-1
select-container
`;

export const ContentStyles = oneLine`
animate-selectFadeOut
origin-[var(--kb-select-content-transform-origin)]
select-content

data-[expanded]:animate-selectFadeIn
`;

export const ItemStyles = oneLine`
cursor-pointer
group
outline-none
pl-8
pr-4
py-1
relative
rounded-lg
select-item
text-neutral-primary-300
              
focus:text-primary-700
focus:z-10

hover:bg-primary-100

data-[disabled]:opacity-50

data-[highlighted]:bg-primary-200
data-[highlighted]:text-primary-800
`;

export const LabelStyles = oneLine`
font-bold
select-label
text-primary-400
text-sm
tracking-wide
uppercase
`;

export const MenuStyles = oneLine`
bg-neutral-secondary-900
flex
flex-col
max-h-72
outline-none
overflow-y-auto
p-1
rounded-lg
select-menu
shadow-lg
z-10

focus:!ring-0
`;

export const TriggerStyles = oneLine`
bg-transparent
flex
items-center
justify-between
outline-none
p-4
relative
ring-2
ring-neutral-primary-200
rounded-lg
select-trigger
text-neutral-primary-200
transition-shadow
w-full

disabled:cursor-not-allowed
disabled:ring-neutral-primary-600
disabled:text-neutral-primary-600

[&:disabled_.select-vector-container]:text-neutral-primary-600

focus:ring-primary-500

hover:ring-primary-500

[&_>_span[data-placeholder-shown]]:text-neutral-primary-500
`;

export const VectorContainerStyles = ({
  isOpen,
}: {
  isOpen: boolean;
}) => oneLine`
${
  isOpen
    ? `
rotate-0
text-primary-500
`
    : `
rotate-180
text-neutral-primary-200
`
}

-translate-y-1/2
absolute
select-vector-container
right-4
top-1/2
transition-all
`;
