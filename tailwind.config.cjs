/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
      tooltipScaleIn: {
        from: {
          transform: "scale(0)",
          opacity: 0,
        },
        to: {
          transform: "scale(1)",
          opacity: 1,
        },
      },
      tooltipScaleOut: {
        from: {
          transform: "scale(1)",
          opacity: 1,
        },
        to: {
          transform: "scale(0)",
          opacity: 0,
        },
      },
    },
    animation: {
      accordionSlideUp: "accordionSlideUp 300ms cubic-bezier(0.76, 0, 0.24, 1)",
      accordionSlideDown:
        "accordionSlideDown 300ms cubic-bezier(0.76, 0, 0.24, 1)",

      dialogScaleIn: "dialogScaleIn 300ms cubic-bezier(0.45, 0, 0.55, 1)",
      dialogScaleOut: "dialogScaleOut 300ms cubic-bezier(0.45, 0, 0.55, 1)",

      overlayFadeIn: "fadeIn 400ms ease-in-out",
      overlayFadeOut: "fadeOut 400ms ease-in-out",

      popoverFadeIn: "fadeIn 200ms ease-in-out",
      popoverFadeOut: "fadeOut 200ms ease-in-out",

      selectFadeIn: "selectFadeIn 200ms ease-in-out",
      selectFadeOut: "selectFadeOut 200ms ease-in-out",

      toastFadeOut: "fadeOut 100ms ease-in",
      toastSlideIn: "toastSlideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      toastSwipeOut: "toastSwipeOut 100ms ease-out",

      tooltipFadeIn: "fadeIn 500ms ease-in-out",
      tooltipFadeOut: "fadeOut 500ms ease-in-out",

      tooltipScaleIn: "tooltipScaleIn 500ms ease-out forwards",
      tooltipScaleOut: "tooltipScaleOut 500ms ease-out forwards",
    },
  },
  plugins: [],
};
