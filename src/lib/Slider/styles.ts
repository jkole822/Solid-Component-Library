import { oneLine } from "common-tags";

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
`;

export const TrackStyles = oneLine`
bg-neutral-primary-400
h-2
relative
rounded-full
slider-track
w-full
`;

export const ValueStyles = oneLine`
slider-value
h-0
invisible
`;
