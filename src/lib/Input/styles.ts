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
ring-neutral-primary-200
rounded-lg
text-neutral-primary-200
transition-all
w-full

disabled:ring-neutral-primary-600
disabled:cursor-not-allowed

[&:disabled_~_label]:text-neutral-primary-600

focus:ring-primary-500

[&:focus_~_label]:-translate-y-[55%]
[&:focus_~_label]:bg-neutral-secondary-800
[&:focus_~_label]:px-1
[&:focus_~_label]:scale-[0.8]
[&:focus_~_label]:text-primary-500

[&:focus_~_.combo-box-trigger]:bg-primary-500
[&:focus_~_.combo-box-trigger]:text-neutral-primary-100

focus:placeholder:text-neutral-primary-500

placeholder:text-transparent

${
  hasValue
    ? `
[&_~_label]:-translate-y-[55%]
[&_~_label]:bg-neutral-secondary-800
[&_~_label]:px-1
[&_~_label]:ring-primary-500
[&_~_label]:scale-[0.8]
[&_~_label]:text-primary-500

valid:ring-primary-500

[&:valid_~_.combo-box-trigger]:bg-primary-500
[&:valid_~_.combo-box-trigger]:text-neutral-primary-50
`
    : ``
}

${
  receivedFocus
    ? `
invalid:!ring-red-400

[&:invalid_~_label]:text-red-400

[&:invalid_~_.combo-box-trigger]:bg-red-400
[&:invalid_~_.combo-box-trigger]:text-neutral-primary-50

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
text-neutral-primary-500
translate-y-4
transition-all
`;
