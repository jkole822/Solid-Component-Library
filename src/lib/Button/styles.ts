import { oneLine } from "common-tags";

const SharedStyles = oneLine`
block
border-[3px]
capitalize
duration-300
ease-in-out
font-semibold
px-9
py-3
relative
rounded-lg
text-center
tracking-wide
transition-all
w-full
2xs:w-fit

data-[disabled]:[text-shadow:none]
data-[disabled]:bg-transparent
data-[disabled]:border-neutral-primary-600
data-[disabled]:cursor-not-allowed
data-[disabled]:shadow-none
data-[disabled]:text-neutral-primary-600
`;

const SharedStarStyles = oneLine`
[&_.star]:-z-10
[&_.star]:[filter:drop-shadow(0_0_0_rgb(var(--color-neutral-primary-100)))]
[&_.star]:[transition-timing-function:cubic-bezier(0,0.4,0,1.01)_!important]
[&_.star]:absolute
[&_.star]:duration-1000
[&_.star]:h-auto
[&_.star]:transition-all

[&[disabled]_.star]:invisible

[&:focus_.star]:[filter:drop-shadow(0_0_10px_rgb(var(--color-neutral-primary-100)))]
[&:focus_.star]:z-10

[&:hover_.star]:[filter:drop-shadow(0_0_10px_rgb(var(--color-neutral-primary-100)))]
[&:hover_.star]:z-10
`;

const SharedLineStyles = oneLine`
[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
border-none
duration-[400ms]
font-extrabold
outline-none
relative
text-neutral-primary-200
tracking-wide
transition-all
uppercase
w-fit

data-[disabled]:!text-neutral-primary-600
data-[disabled]:cursor-not-allowed

focus:text-neutral-primary-50

hover:text-neutral-primary-50

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-primary-500
after:duration-[400ms]
after:h-0.5
after:pointer-events-none
after:transition-all
after:w-0

data-[disabled]:after:!w-0

focus:after:w-full

hover:after:w-full
`;

export const FillButtonStyles = oneLine`
${SharedStyles}
${SharedStarStyles}

bg-primary-500
border-primary-500
outline-none
shadow-[0_0_0_rgb(var(--color-primary-500))]
text-neutral-primary-50

focus:bg-transparent
focus:text-primary-500
focus:shadow-[0_0_25px_rgb(var(--color-primary-500))]

hover:bg-transparent
hover:text-primary-500
hover:shadow-[0_0_25px_rgb(var(--color-primary-500))]

[&_.star-0]:left-[20%]
[&_.star-0]:top-[20%]
[&_.star-0]:w-6

[&:focus_.star-0]:-left-[30%]
[&:focus_.star-0]:-top-[80%]

[&:hover_.star-0]:-left-[30%]
[&:hover_.star-0]:-top-[80%]

[&_.star-1]:left-[45%]
[&_.star-1]:top-[45%]
[&_.star-1]:w-4

[&:focus_.star-1]:left-[10%]
[&:focus_.star-1]:-top-[25%]

[&:hover_.star-1]:left-[10%]
[&:hover_.star-1]:-top-[25%]

[&_.star-2]:left-[40%]
[&_.star-2]:top-[40%]
[&_.star-2]:w-1.5

[&:focus_.star-2]:left-[25%]
[&:focus_.star-2]:top-[55%]

[&:hover_.star-2]:left-[25%]
[&:hover_.star-2]:top-[55%]

[&_.star-3]:left-[40%]
[&_.star-3]:top-[20%]
[&_.star-3]:w-2

[&:focus_.star-3]:left-[80%]
[&:focus_.star-3]:top-[30%]

[&:hover_.star-3]:left-[80%]
[&:hover_.star-3]:top-[30%]

[&_.star-4]:left-[45%]
[&_.star-4]:top-[25%]
[&_.star-4]:w-4

[&:focus_.star-4]:left-[115%]
[&:focus_.star-4]:top-[25%]

[&:hover_.star-4]:left-[115%]
[&:hover_.star-4]:top-[25%]

[&_.star-5]:left-[50%]
[&_.star-5]:top-[5%]
[&_.star-5]:w-1

[&:focus_.star-5]:left-[60%]
[&:focus_.star-5]:top-[5%]

[&:hover_.star-5]:left-[60%]
[&:hover_.star-5]:top-[5%]

[&_.fil0]:fill-neutral-primary-100
`;

export const OutlineButtonStyles = ({
  showBottomGlow,
}: {
  showBottomGlow: boolean;
}) => oneLine`
${SharedStyles}

[text-shadow:_0_0_.5em_rgb(var(--color-primary-300))]
bg-primary-950
border-primary-300
outline-none
shadow-[0_0_1em_.25em_rgb(var(--color-primary-300)),_0_0_4em_1em_rgb(var(--color-primary-500)),_inset_0_0_.75em_.25em_rgb(var(--color-primary-300))]
text-primary-300

active:shadow-[0_0_0.6em_.25em_rgb(var(--color-primary-300)),_0_0_2.5em_2em_rgb(var(--color-primary-500)),_inset_0_0_.75em_.25em_rgb(var(--color-primary-300))]

focus:bg-primary-300
focus:shadow-[0_0_1em_.25em_rgb(var(--color-primary-300)),_0_0_4em_2em_rgb(var(--color-primary-500)),_inset_0_0_.75em_.25em_rgb(var(--color-primary-300))]
focus:text-primary-950

hover:bg-primary-300
hover:shadow-[0_0_1em_.25em_rgb(var(--color-primary-300)),_0_0_4em_2em_rgb(var(--color-primary-500)),_inset_0_0_.75em_.25em_rgb(var(--color-primary-300))]
hover:text-primary-950

${
  showBottomGlow
    ? `
after:absolute
after:bg-primary-500
after:blur-lg
after:h-full
after:left-0
after:opacity-70
after:pointer-events-none
after:top-[85%]
after:[transform:perspective(1.5em)_rotateX(45deg)_scale(1,.55)]
after:w-full
`
    : ``
}

data-[disabled]:after:content-none
`;

export const LineOneButtonStyles = oneLine`
${SharedLineStyles}

after:left-1/2

focus:after:left-0

hover:after:left-0
`;

export const LineTwoButtonStyles = oneLine`
${SharedLineStyles}

after:left-0

before:-top-0.5
before:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
before:absolute
before:bg-primary-500
before:duration-[400ms]
before:h-0.5
before:pointer-events-none
before:right-0
before:transition-all
before:w-0

data-[disabled]:before:!w-0

focus:before:w-full

hover:before:w-full
`;
