import { oneLine } from "common-tags";

export const CheckContainerStyles = oneLine`
absolute
check
combo-box-check-container
left-2
text-primary-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted]:text-primary-800
`;

export const ListItemStyles = oneLine`
combo-box-list-item
cursor-pointer
duration-100
ease-in
group
pl-7
pr-4
py-2
relative
rounded-lg
scroll-my-2
text-sm
transition-all

data-[disabled]:cursor-not-allowed
data-[disabled]:opacity-50

data-[highlighted]:bg-primary-200
data-[highlighted]:text-primary-800
`;

export const ListItemValueStyles = oneLine`
block
combo-box-list-item-value
opacity-75
text-sm
`;

export const ListStyles = oneLine`
combo-box-list
flex
flex-col
max-h-72
overflow-hidden
z-10
`;

export const ScrollContainerStyles = oneLine`
animate-selectFadeOut
bg-neutral-secondary-900
combo-box-scroll-container
flex
flex-col
gap-0
max-h-full
overflow-y-auto
px-2
py-2
rounded-lg
shadow-lg
text-neutral-primary-300

data-[expanded]:animate-selectFadeIn
`;

export const TriggerStyles = oneLine`
absolute
bg-neutral-primary-200
combo-box-trigger
duration-150
ease-in-out
right-0
rounded-br-lg
rounded-tr-lg
size-14
text-neutral-primary-800
top-0
transition-all

disabled:hidden

hover:bg-primary-500
hover:text-neutral-primary-100
`;

export const VectorContainerStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
combo-box-vector-container
left-1/2
text-xl
top-1/2
transition-all
`;
