import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-zinc-700
duration-200
ease-in-out
grid
h-8
items-center
outline-none
pagination-button
px-3
ring-2
ring-zinc-600
rounded-lg
shadow-sm
text-slate-200
text-sm
transition-all

disabled:cursor-not-allowed
disabled:!opacity-25

[&[aria-current="page"]]:bg-blue-500
[&[aria-current="page"]]:text-slate-100

[&[aria-current="page"]:hover:not(.pagination-ellipsis)]:bg-blue-400

focus:ring-2
focus:ring-blue-200

[&:hover:not(.pagination-ellipsis)]:bg-zinc-600
`;

export const ContainerStyles = oneLine`
[&_>_ul]:flex
[&_>_ul]:items-center
[&_>_ul]:gap-2
w-fit
pagination-container
`;
