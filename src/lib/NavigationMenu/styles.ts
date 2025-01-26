import { oneLine } from "common-tags";

export const ArrowStyles = oneLine`
duration-300
transition-transform
`;

const ContentStyles = oneLine`
absolute
box-border
gap-x-2.5
grid
grid-flow-col
grid-rows-3
left-0
m-0
navigation-menu-content
outline-none
p-[22px]
pointer-events-none
top-0

data-[expanded]:pointer-events-auto

[&[data-motion=from-start]]:animate-navigationMenuEnterFromLeft

[&[data-motion=from-end]]:animate-navigationMenuEnterFromRight

[&[data-motion=to-start]]:animate-navigationMenuExitToLeft

[&[data-motion=to-end]]:animate-navigationMenuExitToRight

[&[data-orientation=vertical][data-motion=from-start]]:animate-navigationMenuEnterFromTop

[&[data-orientation=vertical][data-motion=from-end]]:animate-navigationMenuEnterFromBottom

[&[data-orientation=vertical][data-motion=to-start]]:animate-navigationMenuExitToTop

[&[data-orientation=vertical][data-motion=to-end]]:animate-navigationMenuExitToBottom
`;

export const ContentWithCallout = oneLine`
${ContentStyles}
grid-cols-[0.75fr_1fr]
w-[min(500px,_90dvw)]

[&_>_li:first-child]:row-span-3
`;

export const ContentWithoutCallout = oneLine`
${ContentStyles}
grid-cols-2
w-[min(600px,_90dvw)]
`;

export const ItemCalloutStyles = oneLine`
bg-[linear-gradient(135deg,_rgb(var(--color-primary-400))_0%,_rgb(var(--color-primary-600))_100%)]
box-border
flex
flex-col
h-full
justify-end
navigation-menu-item-callout
no-underline
outline-none
p-6
rounded-lg
row-span-3
select-none
w-full

focus:outline-2
focus:outline-primary-300

[&_.navigation-menu-item-label]:mt-4
[&_.navigation-menu-item-label]:text-xl
[&_.navigation-menu-item-label]:text-neutral-primary-50

[&_.navigation-menu-item-description]:text-neutral-primary-50

[&_>_img]:rounded-lg
[&_>_img]:size-12
`;

export const ItemDescriptionStyles = oneLine`
duration-200
ease-in-out
leading-[1.4]
navigation-menu-item-description
opacity-80
text-neutral-primary-300
text-sm
transition-colors
`;

export const ItemLabelStyles = oneLine`
duration-200
ease-in-out
font-medium
leading-[1.2]
mb-2
navigation-menu-item-label
text-primary-500
transition-colors
`;

export const ItemStyles = oneLine`
block
duration-200
ease-in-out
leading-[1]
no-underline
outline-none
p-3
rounded-lg
select-none
transition-colors

data-[disabled]:bg-neutral-800
data-[disabled]:cursor-not-allowed

data-[disabled]:[&_.navigation-menu-item-description]:text-neutral-primary-500

data-[disabled]:[&_.navigation-menu-item-label]:text-neutral-primary-400

focus:bg-neutral-secondary-900

[&:focus_.navigation-menu-item-description]:text-neutral-primary-100

[&:focus_.navigation-menu-item-label]:text-primary-400

hover:bg-neutral-secondary-900

[&:hover_.navigation-menu-item-description]:text-neutral-primary-100

[&:hover_.navigation-menu-item-label]:text-primary-400
`;

export const RootStyles = oneLine`
bg-neutral-secondary-950
flex
items-center
justify-center
navigation-menu-root

[&[data-orientation=vertical]]:flex-col
`;

export const TriggerIndicatorStyles = oneLine`
-mx-[7.5px]
-my-1
duration-300
ease
navigation-menu-trigger-indicator
relative
size-[15px]
transition-transform

[&[data-expanded]]:[transform:rotateX(180deg)]

[[data-orientation=vertical]_&]:-rotate-90

[[data-orientation=vertical]_.navigation-menu-trigger[data-expanded]_&]:[transform:rotate(-90deg)_rotateX(180deg)]
`;

export const TriggerStyles = oneLine`
appearance-none
bg-neutral-secondary-950
border-none
duration-300
font-medium
gap-2
inline-flex
items-center
justify-center
leading-none
navigation-menu-trigger
no-underline
outline-none
p-4
text-neutral-primary-300
transition-colors
w-auto

data-[disabled]:!bg-neutral-800
data-[disabled]:cursor-not-allowed
data-[disabled]:!text-neutral-primary-500

[&[data-highlighted=true]]:bg-neutral-secondary-900
[&[data-highlighted=true]]:text-primary-500
`;

export const ViewportStyles = oneLine`
[transition:width,_height,_250ms_ease]
animate-viewportHide
bg-neutral-secondary-950
border-neutral-secondary-700
border-[1.5px]
duration-300
ease
flex
h-[var(--kb-navigation-menu-viewport-height)]
items-center
justify-center
navigation-menu-viewport
opacity-0
origin-[var(--kb-menu-content-transform-origin)]
overflow-x-clip
overflow-y-visible
pointer-events-none
shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)]
w-[var(--kb-navigation-menu-viewport-width)]
z-100

[&[data-expanded]]:animate-viewportShow
[&[data-expanded]]:opacity-100
[&[data-expanded]]:pointer-events-auto
[&[data-expanded]]:rounded-lg

[&[data-orientation=vertical]]:overflow-x-visible
[&[data-orientation=vertical]]:overflow-y-clip
`;
