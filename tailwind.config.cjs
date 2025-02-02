/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          primary: {
            50: "rgb(var(--color-neutral-primary-50))",
            100: "rgb(var(--color-neutral-primary-100))",
            200: "rgb(var(--color-neutral-primary-200))",
            300: "rgb(var(--color-neutral-primary-300))",
            400: "rgb(var(--color-neutral-primary-400))",
            500: "rgb(var(--color-neutral-primary-500))",
            600: "rgb(var(--color-neutral-primary-600))",
            700: "rgb(var(--color-neutral-primary-700))",
            800: "rgb(var(--color-neutral-primary-800))",
            900: "rgb(var(--color-neutral-primary-900))",
            950: "rgb(var(--color-neutral-primary-950))",
          },
          secondary: {
            50: "rgb(var(--color-neutral-secondary-50))",
            100: "rgb(var(--color-neutral-secondary-100))",
            200: "rgb(var(--color-neutral-secondary-200))",
            300: "rgb(var(--color-neutral-secondary-300))",
            400: "rgb(var(--color-neutral-secondary-400))",
            500: "rgb(var(--color-neutral-secondary-500))",
            600: "rgb(var(--color-neutral-secondary-600))",
            700: "rgb(var(--color-neutral-secondary-700))",
            800: "rgb(var(--color-neutral-secondary-800))",
            900: "rgb(var(--color-neutral-secondary-900))",
            950: "rgb(var(--color-neutral-secondary-950))",
          },
        },
        primary: {
          50: "rgb(var(--color-primary-50))",
          100: "rgb(var(--color-primary-100))",
          200: "rgb(var(--color-primary-200))",
          300: "rgb(var(--color-primary-300))",
          400: "rgb(var(--color-primary-400))",
          500: "rgb(var(--color-primary-500))",
          600: "rgb(var(--color-primary-600))",
          700: "rgb(var(--color-primary-700))",
          800: "rgb(var(--color-primary-800))",
          900: "rgb(var(--color-primary-900))",
          950: "rgb(var(--color-primary-950))",
        },
      },
      screens: {
        "2xs": "384px",
        xs: "512px",
      },
    },
    keyframes: {
      accordionSlideUp: {
        from: {
          height: "var(--kb-accordion-content-height)",
        },
        to: {
          height: 0,
        },
      },
      accordionSlideDown: {
        from: {
          height: 0,
        },
        to: {
          height: "var(--kb-accordion-content-height)",
        },
      },
      carouselShow: {
        from: {
          filter: "blur(5px)",
          transform: "translateY(calc(-50% + 75px))",
        },
        to: {
          opacity: 1,
          filter: "blur(0)",
        },
      },
      collapsibleSlideUp: {
        from: {
          height: "var(--kb-collapsible-content-height)",
        },
        to: {
          height: 0,
        },
      },
      collapsibleSlideDown: {
        from: {
          height: 0,
        },
        to: {
          height: "var(--kb-collapsible-content-height)",
        },
      },
      dialogScaleIn: {
        from: {
          transform: "scale(0) translate(-50%, -50%)",
          opacity: 0,
        },
        to: {
          transform: "scale(1) translate(-50%, -50%)",
          opacity: 1,
        },
      },
      dialogScaleOut: {
        from: {
          transform: "scale(1) translate(-50%, -50%)",
          opacity: 1,
        },
        to: {
          transform: "scale(0) translate(-50%, -50%)",
          opacity: 0,
        },
      },
      fadeIn: {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      fadeOut: {
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      },
      navigationMenuEnterFromRight: {
        from: {
          opacity: 0,
          transform: "translateX(200px)",
        },
        to: {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      navigationMenuEnterFromLeft: {
        from: {
          opacity: 0,
          transform: "translateX(-200px)",
        },
        to: {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      navigationMenuExitToRight: {
        from: {
          opacity: 1,
          transform: "translateX(0)",
        },
        to: {
          opacity: 0,
          transform: "translateX(200px)",
        },
      },
      navigationMenuExitToLeft: {
        from: {
          opacity: 1,
          transform: "translateX(0)",
        },
        to: {
          opacity: 0,
          transform: "translateX(-200px)",
        },
      },
      navigationMenuEnterFromBottom: {
        from: {
          opacity: 0,
          transform: "translateY(200px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      navigationMenuEnterFromTop: {
        from: {
          opacity: 0,
          transform: "translateY(-200px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      navigationMenuExitToBottom: {
        from: {
          opacity: 1,
          transform: "translateY(0)",
        },
        to: {
          opacity: 0,
          transform: "translateY(200px)",
        },
      },
      navigationMenuExitToTop: {
        from: {
          opacity: 1,
          transform: "translateY(0)",
        },
        to: {
          opacity: 0,
          transform: "translateY(-200px)",
        },
      },
      selectFadeIn: {
        from: {
          opacity: 0,
          transform: "translateY(-8px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      selectFadeOut: {
        from: {
          opacity: 1,
          transform: "translateY(0)",
        },
        to: {
          opacity: 0,
          transform: "translateY(-8px)",
        },
      },
      toastSlideIn: {
        from: {
          transform: "translateX(calc(100% + var(--viewport-padding)))",
        },
        to: {
          transform: "translateX(0)",
        },
      },
      toastSwipeOut: {
        from: {
          transform: "translateX(var(--kb-toast-swipe-end-x))",
        },
        to: {
          transform: "translateX(calc(100% + var(--viewport-padding)))",
        },
      },
      viewportHide: {
        from: {
          opacity: 1,
          transform: "rotateX(0deg) scale(1)",
        },
        to: {
          opacity: 0,
          transform: "rotateX(-10deg) scale(0.96)",
        },
      },
      viewportShow: {
        from: {
          opacity: 0,
          transform: "rotateX(-20deg) scale(0.96)",
        },
        to: {
          opacity: 1,
          transform: "rotateX(0deg) scale(1)",
        },
      },
    },
    animation: {
      accordionSlideUp: "accordionSlideUp 300ms cubic-bezier(0.76, 0, 0.24, 1)",
      accordionSlideDown:
        "accordionSlideDown 300ms cubic-bezier(0.76, 0, 0.24, 1)",

      carouselShow: "carouselShow 750ms ease-in-out 300ms forwards",

      collapsibleSlideUp:
        "collapsibleSlideUp 300ms cubic-bezier(0.76, 0, 0.24, 1)",
      collapsibleSlideDown:
        "collapsibleSlideDown 300ms cubic-bezier(0.76, 0, 0.24, 1)",

      dialogScaleIn: "dialogScaleIn 300ms cubic-bezier(0.45, 0, 0.55, 1)",
      dialogScaleOut: "dialogScaleOut 300ms cubic-bezier(0.45, 0, 0.55, 1)",

      overlayFadeIn: "fadeIn 400ms ease-in-out",
      overlayFadeOut: "fadeOut 400ms ease-in-out",

      navigationMenuEnterFromRight:
        "navigationMenuEnterFromRight 300ms ease forwards",
      navigationMenuEnterFromLeft:
        "navigationMenuEnterFromLeft 300ms ease forwards",
      navigationMenuExitToRight:
        "navigationMenuExitToRight 300ms ease forwards",
      navigationMenuExitToLeft: "navigationMenuExitToLeft 300ms ease forwards",
      navigationMenuEnterFromBottom:
        "navigationMenuEnterFromBottom 300ms ease forwards",
      navigationMenuEnterFromTop:
        "navigationMenuEnterFromTop 300ms ease forwards",
      navigationMenuExitToBottom:
        "navigationMenuExitToBottom 300ms ease forwards",
      navigationMenuExitToTop: "navigationMenuExitToTop 300ms ease forwards",

      popoverFadeIn: "fadeIn 200ms ease-in-out",
      popoverFadeOut: "fadeOut 200ms ease-in-out",

      selectFadeIn: "selectFadeIn 200ms ease-in-out",
      selectFadeOut: "selectFadeOut 200ms ease-in-out",

      toastFadeOut: "fadeOut 100ms ease-in",
      toastSlideIn: "toastSlideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      toastSwipeOut: "toastSwipeOut 100ms ease-out",

      viewportHide: "viewportHide 300ms ease-in forwards",
      viewportShow: "viewportShow 300ms ease-out",
    },
  },
  plugins: [],
};
