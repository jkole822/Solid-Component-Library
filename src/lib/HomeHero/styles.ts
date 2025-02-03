import { oneLine } from "common-tags";

const SharedCursorStyles = oneLine`
-left-[100px]
-translate-x-1/2
-translate-y-1/2
fixed
hidden
pointer-events-none
rounded-full
top-1/2

lg:block
`;

const CursorTwoThreeStyles = oneLine`
duration-300
ease-in-out
h-9
transition-all
w-9
z-[9998]

[&.hover]:-translate-x-1/4
[&.hover]:-translate-y-1/4
[&.hover]:border-none
[&.hover]:scale-[2]
`;

export const BottomCTAContainerStyles = oneLine`
block
cursor-pointer
home-hero-link-container
mx-auto
relative
text-center
w-full
`;

export const BottomCTATextStyles = oneLine`
cursor-pointer
duration-200
ease
font-black
home-hero-link-text
leading-[80px]
mx-auto
opacity-[0.35]
tex-center
text-[100px]
text-neutral-primary-100
transition-all

hover:opacity-[0.15]
`;

export const CarouselBackgroundImageStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
bg-center
bg-cover
bg-no-repeat
duration-300
ease
home-hero-carousel-background-image
left-1/2
list-none
max-w-[950px]
opacity-0
overflow-hidden
rounded-lg
shadow-[0_0_50px_rgba(0,0,0,.6)]
top-1/2
transition-all
w-[calc(100%_-_80px)]

[&_img]:block
[&_img]:h-auto
[&_img]:w-full
`;

export const CarouselImagesContainerStyles = oneLine`
absolute
home-hero-carousel-images-container
top-0
left-0
w-full
h-full
m-0
z-[2]

[&_li]:absolute
[&_li]:duration-300
[&_li]:ease
[&_li]:h-full
[&_li]:left-0
[&_li]:list-none
[&_li]:overflow-hidden
[&_li]:top-0
[&_li]:transition-all
[&_li]:w-full

[&_li.show_.home-hero-carousel-background-image]:opacity-100

[&_li.show_.home-hero-carousel-title]:opacity-100
[&_li.show_.home-hero-carousel-title]:translate-x-0

[&_li.show_.home-hero-carousel-number]:opacity-100
[&_li.show_.home-hero-carousel-number]:translate-y-0

[&_li.show_.home-hero-carousel-number-back]:opacity-100
`;

export const CarouselLinksContainerStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
bg-neutral-secondary-900/95
home-hero-carousel-links-container
left-1/2
list-none
m-0
px-[15px]
py-2
rounded-lg
shadow-[0_0_10px_rgba(0,0,0,.8)]
top-1/2
w-auto
z-10

md:bg-neutral-secondary-900/80
md:shadow-[0_0_30px_rgba(0,0,0,.8)]
`;

export const CarouselLinkStyles = oneLine`
home-hero-carousel-link
inline-block
mx-auto
text-center

md:m-[5px]
md:text-left

[&_a]:block
[&_a]:duration-300
[&_a]:ease
[&_a]:font-extrabold
[&_a]:leading-[1]
[&_a]:list-none
[&_a]:m-[5px]
[&_a]:no-underline
[&_a]:opacity-50
[&_a]:p-0
[&_a]:relative
[&_a]:text-center
[&_a]:text-neutral-primary-300
[&_a]:text-[13px]
[&_a]:tracking-[1px]
[&_a]:transition-all
[&_a]:uppercase

[&_a:hover]:no-underline

lg:[&_a.active]:opacity-100
lg:[&_a.active]:text-neutral-primary-100

md:[&_a]:mx-auto
md:[&_a]:my-0
md:[&_a]:text-sm
md:[&_a]:tracking-[2px]
`;

export const CarouselNumberBackStyles = oneLine`
-translate-x-1/2
absolute
block
bottom-0
duration-300 
ease
font-black
home-hero-carousel-number-back
leading-[1]
left-1/2
list-none
opacity-0
text-[26vw]
text-neutral-primary-50/20
transition-all
z-[5]

md:[32vw]

lg:text-[100px]
`;

export const CarouselNumberFixedStyles = oneLine`
absolute
block
bottom-10
font-light
home-hero-carousel-number-fixed
leading-[1]
left-1/2
list-none
ml-[30px]
text-[13px]
text-center
text-neutral-primary-50
tracking-[2px]
w-10
z-[6]

before:-left-[60px]
before:absolute
before:bg-neutral-primary-50/40
before:h-px
before:top-1/2
before:w-[60px]
before:z-[1]
`;

export const CarouselNumberStyles = oneLine`
-ml-[70px]
absolute
block
bottom-10
duration-300
ease
font-light
home-hero-carousel-number 
leading-[1]
left-1/2
list-none
opacity-0
text-[13px]
text-center
text-neutral-primary-50
tracking-[2px]
transition-all
translate-y-full
w-10
z-[6]
`;

export const CarouselTitleStyles = oneLine`
-translate-full
[-webkit-writing-mode:vertical-lr]
[writing-mode:vertical-lr]
absolute
block
duration-300
ease
h-full
home-hero-carousel-title
leading-4
left-[13px]
opacity-0
text-center
text-neutral-primary-200 
text-sm
top-0
tracking-[1px]
transition-all
z-[19]

xl:left-[30px]
`;

export const ContainerStyles = oneLine`
block
overflow-x-hidden
home-hero-container
w-full

[&::selection]:bg-neutral-secondary-950
[&::selection]:text-neutral-primary-50

[&::-moz-selection]:bg-neutral-secondary-950
[&::-moz-selection]:text-neutral-primary-50
`;

export const CursorOneStyles = oneLine`
${SharedCursorStyles}

bg-neutral-primary-50
h-0
home-hero-cursor-one
w-0
z-[9999]
`;

export const CursorTwoStyles = oneLine`
${SharedCursorStyles}
${CursorTwoThreeStyles}

border-2
border-neutral-primary-200
home-hero-cursor-two
shadow-[0_0_22px_rgba(var(--color-neutral-primary-50)_/_0.6)]

[&.hover]:bg-neutral-primary-50/10
[&.hover]:shadow-[0_0_12px_rgba(var(--color-neutral-primary-50)_/_0.2)]
`;

export const CursorThreeStyles = oneLine`
${CursorTwoThreeStyles}

home-hero-cursor-three
`;

export const FloatingLinkStyles = oneLine`
cursor-pointer
fixed
home-hero-floating-link
right-[30px]
top-[30px]
z-[251]
`;

export const FloatingLinkTriggerStyles = oneLine`
!p-0
!rounded-full
!size-14
home-hero-floating-link-trigger
text-3xl
text-center

[&_i]:-translate-x-1/2
[&_i]:-translate-y-1/2
[&_i]:absolute
[&_i]:left-1/2
[&_i]:top-1/2

[&_svg]:-translate-x-1/2
[&_svg]:-translate-y-1/2
[&_svg]:absolute
[&_svg]:left-1/2
[&_svg]:top-1/2
`;

export const ScrollToTopStyles = oneLine`
bottom-[30px]
cursor-pointer
duration-250
ease 
fixed
home-hero-scroll-to-top
invisible
opacity-0
right-[40px]
text-2xl
transition-all
translate-y-[15px]
w-2.5
z-[251]

hover:bottom-8

[&.active]:opacity-100
[&.active]:translate-y-0
[&.active]:visible
`;

export const SectionDescriptionStyles = oneLine`
font-bold
home-hero-section-description
p-0
text-[22px]
text-primary-400
tracking-[2px]
`;

export const SectionFlexRowStyles = oneLine`
-mx-[15px]
flex
flex-wrap
home-hero-section-flex-row
`;

export const SectionHeaderStyles = oneLine`
-translate-y-1/2
absolute
home-hero-section-header
left-0
top-1/2
w-full
z-[3]
`;

export const SectionHeadingStyles = oneLine`
font-black
home-hero-section-heading
leading-[1]
m-0
p-0
text-[5vw]
text-neutral-primary-100
tracking-[8px]
uppercase
`;

export const SectionInnerContainerStyles = oneLine`
home-hero-section-inner-container
mx-auto
px-[15px]
w-full

sm:max-w-[490px]
md:max-w-[720px]
lg:max-w-[960px]
xl:max-w-[1140px]
`;

export const SectionParallaxStyles = oneLine`
bg-center
bg-cover
fixed
h-full
home-hero-section-parallax
left-0
top-0
w-full
z-[2]
`;

export const SectionStyles = oneLine`
block
home-hero-section
relative
w-full
`;

export const ShadowTitleStyles = oneLine`
[-webkit-background-clip:text]
[-webkit-text-fill-color:transparent]
[-webkit-writing-mode:vertical-lr]
[writing-mode:vertical-lr]
bg-[linear-gradient(90deg,_rgba(var(--color-neutral-primary-400)_/_0),_rgba(var(--color-neutral-primary-400)_/_0.35))]
fixed
font-black
h-[300%]
home-hero-shadow-title
leading-[1]
left-5
mt-[30px]
text-[18vw]
text-left
text-neutral-primary-400/10
top-0
w-full
z-[1]
`;
