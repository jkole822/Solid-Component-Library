import { oneLine } from "common-tags";

export const ButtonContainerStyles = oneLine`
dialog-button-container
flex
flex-col
gap-2.5
justify-end
mt-8
xs:flex-row
xs:gap-4
`;

export const CancelButtonStyles = oneLine`
bg-neutral-primary-100
dialog-close-button
font-bold
h-8
inline-flex
items-center
justify-center
leading-none
px-4
rounded-lg
text-neutral-primary-700
tracking-wide
uppercase
`;

export const CloseButtonStyles = oneLine`
absolute
appearance-none
dialog-close-button
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-none
p-1
right-4
ring-primary-400
rounded-full
text-primary-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
bg-neutral-secondary-900
dialog-content
fixed
left-1/2
max-h-[85vh]
max-w-[28.125rem]
origin-top-left
p-6
rounded-xl
shadow-xl
top-1/2
w-[90vw]
z-50

animate-dialogScaleOut

[&[data-expanded]]:animate-dialogScaleIn
`;

export const DescriptionStyles = oneLine`
dialog-description
leading-normal
mb-4
mt-2
text-neutral-primary-400
`;

export const HeadingStyles = oneLine`
dialog-heading
font-medium
m-0
text-neutral-primary-200
text-lg
`;

export const OverlayStyles = oneLine`
bg-neutral-secondary-900/50
dialog-overlay
fixed
inset-0
z-50

animate-overlayFadeOut

[&[data-expanded]]:animate-overlayFadeIn
`;

export const SubmitButtonStyles = oneLine`
bg-primary-600
dialog-submit-button
font-bold
h-8
inline-flex
items-center
justify-center
leading-none
px-4
rounded-lg
text-neutral-primary-100
tracking-wide
uppercase
`;
