import { oneLine } from "common-tags";

export const CloseButtonStyles = oneLine`
absolute
appearance-none
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-hidden
p-2
right-2
ring-primary-400
rounded-full
text-primary-600
toast-close-button
top-2
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
flex
items-start
toast-content
w-full
`;

export const DescriptionStyles = oneLine`
text-neutral-primary-400
text-sm
toast-description
`;

export const ListStyles = oneLine`
[--viewport-padding:16px]
bottom-0
fixed
flex
flex-col
gap-2
list-none
m-0
max-w-screen
outline-hidden
p-[var(--viewport-padding)]
right-0
toast-list
w-96
z-100
`;

export const ProgressFillStyles = oneLine`
bg-primary-500
duration-300
h-full
rounded-lg
toast-progress-fill
transition-[width]
w-[var(--kb-toast-progress-fill-width)]
`;

export const ProgressTrackStyles = oneLine`
bg-neutral-secondary-700
h-2
rounded-lg
toast-progress-track
w-full
`;

export const TitleStyles = oneLine`
font-medium
text-neutral-primary-50
toast-title
`;

export const ToastStyles = oneLine`
bg-neutral-secondary-900
border-[1px]
border-neutral-secondary-600
flex
flex-col
gap-2
items-center
justify-between
p-3
relative
rounded-lg
shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)]
toast

data-closed:animate-toast-fade-out

data-opened:animate-toast-slide-in

data-[swipe="cancel"]:translate-x-0
data-[swipe="cancel"]:transition-transform
data-[swipe="cancel"]:duration-200
data-[swipe="cancel"]:ease-out

data-[swipe="end"]:animate-toast-swipe-out
data-[swipe="end"]:duration-100
data-[swipe="end"]:ease-out
`;
