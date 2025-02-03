import { oneLine } from "common-tags";

export const DescriptionStyles = oneLine`
slider-description
text-neutral-primary-400
text-sm
`;

export const ErrorMessageStyles = oneLine`
font-medium
slider-error-message
text-red-400
text-sm
`;

export const LabelStyles = oneLine`
inline-block
font-bold
mb-3
mr-auto
slider-label
text-primary-400
text-sm
tracking-wide
uppercase
`;

export const RangeStyles = oneLine`
absolute
bg-primary-500
h-full
rounded-full
slider-range

data-[invalid]:bg-red-500

data-[orientation=vertical]:h-auto
data-[orientation=vertical]:w-full
`;

export const RootStyles = oneLine`
flex
flex-col
items-center
relative
select-none
slider-root
touch-none
w-full

data-[orientation=vertical]:h-48
`;

export const TextContainerStyles = oneLine`
flex
flex-col
mt-4
self-start
`;

export const ThumbStyles = oneLine`
-top-1.5
block
bg-neutral-primary-100
outline-none
relative
rounded-full
size-5
slider-thumb
transition-shadow

hover:shadow-[0_0_0_4px_rgba(var(--color-primary-400)_/_0.4)]

focus:shadow-[0_0_0_4px_rgba(var(--color-primary-400)_/_0.7)]

hover:data-[invalid]:shadow-[0_0_0_4px_theme(colors.red.500)40]

focus:data-[invalid]:shadow-[0_0_0_4px_theme(colors.red.500)70]

data-[orientation=vertical]:-left-1.5
data-[orientation=vertical]:top-[unset]
`;

export const TrackStyles = oneLine`
bg-neutral-primary-400
h-2
relative
rounded-full
slider-track
w-full

data-[orientation=vertical]:h-full
data-[orientation=vertical]:w-2

data-[inverted]:rotate-180
`;

export const ValueStyles = oneLine`
slider-value
h-0
invisible
`;
