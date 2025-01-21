import { oneLine } from "common-tags";

export const ContainerStyles = ({
  disabled,
}: {
  disabled?: boolean;
}) => oneLine`
${disabled ? "cursor-not-allowed" : "cursor-pointer"}

checkbox-container
cursor-pointer
flex
group
items-center
`;

export const InputStyles = oneLine`
checkbox-input
h-0
w-0

[&[data-checked]_~_div_svg_.path]:stroke-primary-500
[&[data-checked]_~_div_svg_.path]:[stroke-dasharray:70.5096664428711_9999999]
[&[data-checked]_~_div_svg_.path]:[stroke-dashoffset:-262.2723388671875]

[&[data-disabled]_~_div_svg]:cursor-not-allowed

[&[data-disabled]_~_label]:cursor-not-allowed
[&[data-disabled]_~_label]:!text-neutral-primary-600

[&[data-disabled]_~_label:after]:!w-0

[&[data-disabled]_~_div_svg_.path]:!stroke-neutral-primary-600

[&:focus-visible_~_label]:text-neutral-primary-50

[&:focus-visible_~_label:after]:w-full
`;

export const LabelStyles = oneLine`
checkbox-label
cursor-pointer
duration-300
ml-1.5
relative
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
`;

export const PathStyles = oneLine`
[stroke-dasharray:241_9999999]
[stroke-dashoffset:0]
[stroke-linecap:round]
[stroke-linejoin:round]
[transition:stroke-dasharray_0.5s_ease,_stroke-dashoffset_0.5s_ease]
checkbox-path
fill-none
origin-center
path
scale-50
stroke-[6]
stroke-neutral-primary-200
`;

export const VectorStyles = oneLine`
checkbox-vector
overflow-visible
`;
