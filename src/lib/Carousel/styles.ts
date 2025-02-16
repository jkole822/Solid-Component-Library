import { oneLine } from "common-tags";

export const ButtonContainerStyles = oneLine`
absolute
carousel-button-container
flex
gap-4
left-5
select-none
top-5
z-20

2xs:-translate-y-1/2
2xs:left-[unset]
2xs:right-5
2xs:top-[calc(50%_+_175px)]

sm:right-8
sm:top-[calc(50%_+_200px)]

lg:right-12
lg:top-[calc(50%_+_225px)]
`;

export const ButtonIconStyles = oneLine`
carousel-button-icon
fa-solid
fa-arrow-left
`;

export const ButtonStyles = oneLine`
carousel-button
!px-4
!rounded-full
`;

export const CarouselStyles = oneLine`
carousel
`;

export const CardContentStyles = oneLine`
[text-shadow:0_5px_7px_black]
absolute
carousel-content
hidden
left-5
mx-auto
opacity-0
top-[340px]
w-[calc(100%_-_40px)]

2xs:-translate-y-1/2
2xs:top-1/2
2xs:w-[min(30vw,_400px)]

sm:left-8

lg:left-12
`;

export const CardStyles = oneLine`
[transition:translate_0.1s,_left_0.75s,_top_0.75s,_width_0.75s,_height_0.75s]
absolute
bg-center
bg-cover
carousel-card
h-[220px]
list-none
rounded-lg
shadow-[0_20px_30px_rgba(255,255,255,0.3)_inset]
top-24
w-[130px]
z-10

2xs:-translate-y-1/2
2xs:top-1/2

sm:h-[270px]
sm:w-[160px]

lg:h-[300px]
lg:w-[200px]

nth-1:[transform:none]
nth-1:h-full
nth-1:opacity-100
nth-1:rounded-none
nth-1:shadow-none
nth-1:top-0
nth-1:translate-y-0
nth-1:w-full

nth-2:[transform:none]
nth-2:h-full
nth-2:opacity-100
nth-2:rounded-none
nth-2:shadow-none
nth-2:top-0
nth-2:translate-y-0
nth-2:w-full

nth-1:before:absolute
nth-1:before:inset-0
nth-1:before:bg-neutral-950/75

nth-2:before:absolute
nth-2:before:inset-0
nth-2:before:bg-neutral-950/50

[&:nth-of-type(2)_.carousel-content]:animate-carousel-show
[&:nth-of-type(2)_.carousel-content]:block
`;

export const ContainerStyles = oneLine`
carousel-container
grid
min-h-screen
overflow-hidden
place-items-center
relative
shadow-[0_3px_10px_rgba(0,0,0,0.3)]
w-full

2xs:min-h-[500px]

sm:min-h-[550px]

lg:min-h-[600px]
`;

export const DescriptionStyles = oneLine`
carousel-description
mb-12
text-neutral-primary-200
text-sm

sm:text-base
`;

export const HeadingStyles = oneLine`
carousel-heading
mb-4
text-2xl
text-neutral-primary-50

sm:text-3xl

lg:text-5xl
`;
