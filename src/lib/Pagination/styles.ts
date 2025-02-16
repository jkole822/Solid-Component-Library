import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-neutral-secondary-700
duration-200
ease-in-out
grid
h-8
items-center
outline-hidden
pagination-button
px-3
ring-2
ring-neutral-secondary-600
rounded-lg
shadow-sm
text-neutral-primary-200
text-sm
transition-all

disabled:cursor-not-allowed
disabled:!opacity-25

aria-[current="page"]:bg-primary-500
aria-[current="page"]:text-neutral-primary-100

[&[aria-current="page"]:hover:not(.pagination-ellipsis)]:bg-primary-400

focus:ring-2
focus:ring-primary-200

[&:hover:not(.pagination-ellipsis)]:bg-neutral-secondary-600
`;

export const ContainerStyles = oneLine`
[&_>_ul]:flex
[&_>_ul]:items-center
[&_>_ul]:gap-2
w-fit
pagination-container
`;
