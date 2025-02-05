import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
switch-container
w-fit

[&[data-checked]_.switch-control]:bg-primary-500

[&[data-checked][data-invalid]_.switch-control]:bg-red-500

[&[data-checked]_.switch-control_.switch-thumb]:translate-y-[2.3em]

[&[data-checked]_.switch-control:after]:[transform:rotateZ(90deg)_rotateY(180deg)_translateY(0.45em)_translateX(-1.4em)]

[&[data-checked]:focus-within_.switch-control]:ring-primary-300

[&[data-checked][data-invalid]:focus-within_.switch-control]:ring-red-300

[&[data-disabled]]:cursor-not-allowed

[&[data-disabled]_.switch-label]:cursor-not-allowed
[&[data-disabled]_.switch-label]:text-neutral-primary-600

[&[data-disabled]_.switch-control]:bg-neutral-primary-600

[&[data-disabled]_.switch-control:after]:-translate-x-[22.5%]
[&[data-disabled]_.switch-control:after]:[background:linear-gradient(transparent_50%,_rgba(var(--color-neutral-primary-400)_/_0.15)_0)_0_50%_/_50%_100%,_repeating-linear-gradient(90deg,rgb(var(--color-neutral-primary-400))_0,rgb(var(--color-neutral-primary-400)),rgb(var(--color-neutral-primary-400))_20%,rgb(var(--color-neutral-primary-400))_20%,rgb(var(--color-neutral-primary-400))_40%)_0_50%_/_50%_100%,_radial-gradient(circle_at_50%_50%,rgb(var(--color-neutral-primary-400))_25%,_transparent_26%)]
[&[data-disabled]_.switch-control:after]:[border-left:0.4em_solid_rgb(var(--color-neutral-primary-400))_!important]
[&[data-disabled]_.switch-control:after]:rotate-90

[&[data-disabled]_.switch-control_.switch-thumb]:bg-neutral-primary-400
[&[data-disabled]_.switch-control_.switch-thumb]:translate-y-0

[&:focus-within_.switch-control]:ring-[3px]

[&:focus-within_.switch-label:after]:w-full
`;

export const ControlStyles = oneLine`
absolute
bg-neutral-primary-400
cursor-pointer
duration-[400ms]
inset-0
ring-primary-500
rounded-lg
switch-control

data-[invalid]:ring-red-500

after:!bg-no-repeat
after:[border-left:0.4em_solid_rgb(var(--color-neutral-primary-100))_!important]
after:[border-right:0_solid_transparent_!important]
after:-translate-x-[22.5%]
after:[background:linear-gradient(transparent_50%,_rgba(var(--color-neutral-primary-100)_/_0.15)_0)_0_50%_/_50%_100%,_repeating-linear-gradient(90deg,_rgb(var(--color-neutral-primary-100))_0,_rgb(var(--color-neutral-primary-100)),_rgb(var(--color-neutral-primary-100))_20%,_rgb(var(--color-neutral-primary-100))_20%,_rgb(var(--color-neutral-primary-100))_40%)_0_50%_/_50%_100%,_radial-gradient(circle_at_50%_50%,_rgb(var(--color-neutral-primary-100))_30%,_transparent_26%)]
after:[transition:border-left-color_0.1s_0.3s_ease-out,_transform_0.3s_ease-out]
after:block
after:[border:0.25em_solid_transparent]
after:box-border
after:h-[1em]
after:left-[0.55em]
after:origin-[25%_50%]
after:relative
after:rotate-90
after:top-[0.5em]
after:w-[2em]
`;

export const DescriptionStyles = oneLine`
switch-description
text-neutral-primary-400
text-sm
`;

export const ErrorMessageStyles = oneLine`
font-medium
switch-error-message
text-red-400
text-sm
`;

export const FlexContainerStyles = oneLine`
flex
gap-8
items-center
switch-flex-container
`;

export const InputStyles = oneLine`
opacity-0
size-0
switch-input
`;

export const LabelStyles = oneLine`
cursor-pointer
duration-300
relative
switch-label
text-neutral-primary-200
transition-all

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-primary-500
after:duration-[400ms]
after:h-0.5
after:left-0
after:pointer-events-none
after:transition-all
after:w-0

data-[invalid]:after:bg-red-500   
`;

export const SwitchContainerStyles = oneLine`
inline-block
switch-switch-container
relative
text-[17px]
w-[1.2em]
h-[3.3em]
`;

export const TextContainerStyles = oneLine`
flex
flex-col
mt-4
switch-text-container
`;

export const ThumbStyles = oneLine`
-left-[0.6em]
absolute
bg-neutral-primary-100
block
duration-[400ms]
h-[0.5em]
rounded-lg
shadow-[0_6px_7px_rgba(0,0,0,0.3)]
switch-thumb
top-[0.2em]
w-[2.4em]
`;
