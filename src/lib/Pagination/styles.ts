import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-zinc-700
grid
h-8
items-center
outline-none
pagination-button
px-3
ring-2
ring-zinc-600
rounded-md
shadow-sm
text-slate-200
text-sm

disabled:cursor-not-allowed
disabled:opacity-25

[&[aria-current="page"]]:bg-blue-600
[&[aria-current="page"]]:text-slate-100

[&:focus[aria-current="page"]]:ring-blue-200

focus:ring-2
focus:ring-blue-400

[&:hover:not(.pagination-ellipsis)]:opacity-75
`;

export const ContainerStyles = oneLine`
[&_>_ul]:flex
[&_>_ul]:items-center
[&_>_ul]:gap-2
w-fit
pagination-container
`;
