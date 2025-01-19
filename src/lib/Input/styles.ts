import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
input-container
relative
w-full
`;

export const InputStyles = ({
  hasValue,
  receivedFocus,
}: {
  hasValue: boolean;
  receivedFocus: boolean;
}) => oneLine`
bg-transparent
duration-150
ease-[cubic-bezier(0.4,0,0.2,1)]
input-input
outline-none
p-4
ring-[1.5px]
ring-slate-200
rounded-lg
text-slate-200
transition-all
w-full

disabled:ring-slate-600
disabled:cursor-not-allowed

[&:disabled_~_label]:text-slate-600

focus:ring-blue-500

[&:focus_~_label]:bg-zinc-800
[&:focus_~_label]:px-0.5
[&:focus_~_label]:scale-[0.8]
[&:focus_~_label]:text-blue-500
[&:focus_~_label]:-translate-y-[55%]

[&:focus_~_.combo-box-trigger]:bg-blue-500
[&:focus_~_.combo-box-trigger]:text-slate-100

focus:placeholder:text-slate-500

placeholder:text-transparent

${
  hasValue
    ? `
[&_~_label]:bg-zinc-800
[&_~_label]:px-0.5
[&_~_label]:ring-blue-500
[&_~_label]:scale-[0.8]
[&_~_label]:text-blue-500
[&_~_label]:-translate-y-[55%]

valid:ring-blue-500

[&:valid_~_.combo-box-trigger]:bg-blue-500
[&:valid_~_.combo-box-trigger]:text-slate-50
`
    : ``
}

${
  receivedFocus
    ? `
invalid:!ring-red-400

[&:invalid_~_label]:text-red-500

[&:invalid_~_.combo-box-trigger]:bg-red-400
[&:invalid_~_.combo-box-trigger]:text-slate-50

[&:focus:invalid_~_label]:text-red-400
`
    : ``
}
`;

export const LabelStyles = oneLine`
absolute
duration-150
ease-[cubic-bezier(0.4,0,0.2,1)]
input-label
left-4
pointer-events-none
text-slate-500
translate-y-4
transition-all
`;
