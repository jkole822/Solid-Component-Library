import { oneLine } from "common-tags";

const SharedCloseButtonStyles = oneLine`
duration-200
ease-in-out
inline-flex
items-center
justify-center
outline-none
p-2
ring-primary-400
rounded-full
transition-all
focus:ring-2

hover:bg-primary-100 
hover:text-primary-600
`;

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

export const DescriptionStyles = oneLine`
combo-box-description
text-neutral-primary-400
text-sm
`;

export const ErrorMessageStyles = oneLine`
combo-box-error-message
font-medium
text-red-400
text-sm
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
`;

export const ListItemDescriptionStyles = oneLine`
block
combo-box-list-item-description
opacity-75
text-sm
text-neutral-primary-400

[[data-highlighted]_&]:text-primary-800
`;

export const ListItemLabelStyles = oneLine`
block
combo-box-list-item-label
text-neutral-primary-200

[[data-highlighted]_&]:text-primary-900
`;

export const ListStyles = oneLine`
combo-box-list
flex
flex-col
z-10
`;

export const MultiSelectionCloseButtonStyles = oneLine`
${SharedCloseButtonStyles}
-translate-y-1/2
absolute
right-16
size-6
text-neutral-primary-200
top-1/2
`;

export const ScrollContainerStyles = oneLine`
animate-selectFadeOut
bg-neutral-secondary-900
combo-box-scroll-container
flex
flex-col
gap-0
max-h-72
overflow-y-scroll
p-2
rounded-lg
shadow-lg
text-neutral-primary-300

data-[expanded]:animate-selectFadeIn
`;

export const SelectionItemCloseButtonStyles = oneLine`
${SharedCloseButtonStyles}
size-4
`;

export const SelectionItemStyles = oneLine`
bg-neutral-secondary-900
combo-box-selection-item
gap-1.5
inline-flex
items-center
px-1.5
py-0.5
ring-2
ring-neutral-secondary-600
rounded
text-neutral-primary-400
`;

export const TriggerStyles = oneLine`
absolute
bg-neutral-primary-200
combo-box-trigger
duration-200
ease-in-out
right-0
rounded-br-lg
rounded-tr-lg
h-full
text-neutral-primary-800
top-0
transition-all
w-14

disabled:hidden

hover:bg-primary-500

[&:hover_i]:text-neutral-primary-100
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
