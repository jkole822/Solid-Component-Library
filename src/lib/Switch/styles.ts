import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
gap-10
flex
items-center
switch-container
w-fit

[&[data-checked]_.switch-control]:bg-blue-500

[&[data-checked]_.switch-control_.switch-thumb]:translate-y-[2.3em]

[&[data-checked]_.switch-control:after]:[transform:rotateZ(90deg)_rotateY(180deg)_translateY(0.45em)_translateX(-1.4em)]

[&[data-checked]:focus-within_.switch-control]:ring-blue-300

[&[data-disabled]]:cursor-not-allowed

[&[data-disabled]_.switch-label]:cursor-not-allowed
[&[data-disabled]_.switch-label]:text-slate-400

[&[data-disabled]_.switch-control]:bg-slate-600

[&[data-disabled]_.switch-control:after]:-translate-x-[22.5%]
[&[data-disabled]_.switch-control:after]:[background:linear-gradient(transparent_50%,_rgba(var(--color-slate-400)_/_0.15)_0)_0_50%_/_50%_100%,_repeating-linear-gradient(90deg,rgb(var(--color-slate-400))_0,rgb(var(--color-slate-400)),rgb(var(--color-slate-400))_20%,rgb(var(--color-slate-400))_20%,rgb(var(--color-slate-400))_40%)_0_50%_/_50%_100%,_radial-gradient(circle_at_50%_50%,rgb(var(--color-slate-400))_25%,_transparent_26%)]
[&[data-disabled]_.switch-control:after]:[border-left:0.4em_solid_rgb(var(--color-slate-400))_!important]
[&[data-disabled]_.switch-control:after]:rotate-90

[&[data-disabled]_.switch-control_.switch-thumb]:bg-slate-400
[&[data-disabled]_.switch-control_.switch-thumb]:translate-y-0

[&:focus-within_.switch-control]:ring-[3px]

[&:focus-within_.switch-label:after]:w-full
`;

export const ControlStyles = oneLine`
absolute
bg-slate-400
cursor-pointer
duration-[400ms]
inset-0
ring-blue-500
rounded-lg
switch-control

after:!bg-no-repeat
after:[border-left:0.4em_solid_rgb(var(--color-slate-100))_!important]
after:[border-right:0_solid_transparent_!important]
after:-translate-x-[22.5%]
after:[background:linear-gradient(transparent_50%,_rgba(var(--color-slate-100)_/_0.15)_0)_0_50%_/_50%_100%,_repeating-linear-gradient(90deg,_rgb(var(--color-slate-100))_0,_rgb(var(--color-slate-100)),_rgb(var(--color-slate-100))_20%,_rgb(var(--color-slate-100))_20%,_rgb(var(--color-slate-100))_40%)_0_50%_/_50%_100%,_radial-gradient(circle_at_50%_50%,_rgb(var(--color-slate-100))_30%,_transparent_26%)]
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

export const InputStyles = oneLine`
opacity-0
size-0
switch-input
`;

export const LabelStyles = oneLine`
cursor-pointer
duration-300
ml-10
relative
switch-label
text-slate-300
transition-all

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-blue-500
after:duration-[400ms]
after:h-0.5
after:left-0
after:pointer-events-none
after:transition-all
after:w-0

group-hover:text-slate-50
`;

export const SwitchContainerStyles = oneLine`
inline-block
switch-switch-container
relative
text-[17px]
w-[1.2em]
h-[3.3em]
`;

export const ThumbStyles = oneLine`
-left-[0.6em]
absolute
bg-slate-100
block
duration-[400ms]
h-[0.5em]
rounded-lg
shadow-[0_6px_7px_rgba(0,0,0,0.3)]
switch-thumb
top-[0.2em]
w-[2.4em]
`;
