import { oneLine } from "common-tags";
import {
  ComboBoxValidationState,
  ComboBoxValidationStateEnum,
} from "../ComboBox/types";

export const ContainerStyles = ({
  hasInputValue,
  hasValue,
  multiple,
  receivedFocus,
  validationState,
}: {
  hasInputValue?: boolean;
  hasValue?: boolean;
  multiple?: boolean;
  receivedFocus?: boolean;
  validationState?: string;
}) => oneLine`
input-container
relative
w-full

${
  multiple
    ? `
    rounded-lg
    ring-[1.5px]
    ring-neutral-primary-200
    
    focus-within:ring-primary-500
    
    [&:focus-within_label]:-translate-y-[55%]
    [&:focus-within_label]:bg-neutral-secondary-800
    [&:focus-within_label]:px-1
    [&:focus-within_label]:scale-[0.8]
    [&:focus-within_label]:text-primary-500
    
    [&:focus-within_.combo-box-trigger]:bg-primary-500
    [&:focus-within_.combo-box-trigger]:text-neutral-primary-100
    
    [&:has(input:disabled)]:ring-neutral-primary-600
   
    ${
      hasInputValue && !hasValue
        ? `
        [&_label]:-translate-y-[55%]
        [&_label]:bg-neutral-secondary-800
        [&_label]:px-1
        [&_label]:scale-[0.8]
        `
        : ``
    }
    
    ${
      !hasInputValue && hasValue
        ? `
        [&_input]:placeholder:text-neutral-primary-500
        `
        : ``
    }
    
    ${
      !hasInputValue
        ? `
          [&:focus-within_input]:placeholder:text-neutral-primary-500
          `
        : ``
    }

    ${
      hasValue
        ? `
        p-4
        [&_label]:-translate-y-[55%]
        [&_label]:bg-neutral-secondary-800
        [&_label]:px-1
        [&_label]:ring-primary-500
        [&_label]:scale-[0.8]
        [&_label]:text-primary-500
        [&_label]:top-0
    
      ${
        !!validationState
          ? `
        ${
          validationState === ComboBoxValidationStateEnum.Valid
            ? `
            ring-primary-500
          
            [&_.combo-box-trigger]:bg-primary-500
            [&_.combo-box-trigger]:text-neutral-primary-50
            `
            : ``
        }
        `
          : ``
      }
      `
        : ``
    }
    
    ${
      receivedFocus
        ? `
          ${
            !!validationState
              ? `
                ${
                  validationState === ComboBoxValidationStateEnum.Invalid
                    ? `
                    !ring-red-400
      
                    [&_label]:!text-red-400
                    
                    [&_.combo-box-trigger]:!bg-red-400
                    [&_.combo-box-trigger]:!text-neutral-primary-50
                    
                    [&:focus_label]:!text-red-400
                    `
                    : ``
                }
                `
              : ``
          }
          `
        : ``
    }
    `
    : ``
}
`;

export const InputStyles = ({
  hasValue,
  multiple,
  receivedFocus,
  validationState,
}: {
  hasValue?: boolean;
  multiple?: boolean;
  receivedFocus: boolean;
  validationState?: ComboBoxValidationState;
}) => oneLine`
bg-transparent
duration-150
ease-[cubic-bezier(0.4,0,0.2,1)]
input-input
outline-none
text-neutral-primary-200
transition-all
w-full

disabled:cursor-not-allowed

[&:disabled_~_label]:text-neutral-primary-600

placeholder:text-transparent

${
  multiple
    ? `
      ${
        hasValue
          ? `
          pt-3
      `
          : `
          p-4
      `
      }
      `
    : `
    p-4
    rounded-lg
    ring-[1.5px]
    ring-neutral-primary-200
    
    disabled:ring-neutral-primary-600
    
    focus:ring-primary-500
    
    focus:placeholder:text-neutral-primary-500
    
    [&:focus_~_label]:-translate-y-[55%]
    [&:focus_~_label]:bg-neutral-secondary-800
    [&:focus_~_label]:px-1
    [&:focus_~_label]:scale-[0.8]
    [&:focus_~_label]:text-primary-500
    
    [&:focus_~_.combo-box-trigger]:bg-primary-500
    [&:focus_~_.combo-box-trigger]:text-neutral-primary-100
    
  ${
    hasValue
      ? `
      [&_~_label]:-translate-y-[55%]
      [&_~_label]:bg-neutral-secondary-800
      [&_~_label]:px-1
      [&_~_label]:ring-primary-500
      [&_~_label]:scale-[0.8]
      [&_~_label]:text-primary-500
  
    ${
      !!validationState
        ? `
      ${
        validationState === ComboBoxValidationStateEnum.Valid
          ? `
          ring-primary-500
        
          [&_~_.combo-box-trigger]:bg-primary-500
          [&_~_.combo-box-trigger]:text-neutral-primary-50
          `
          : ``
      }
      `
        : `
        valid:ring-primary-500
        
        [&:valid_~_.combo-box-trigger]:bg-primary-500
        [&:valid_~_.combo-box-trigger]:text-neutral-primary-50
        `
    }
    `
      : ``
  }
  
  ${
    receivedFocus
      ? `
        ${
          !!validationState
            ? `
              ${
                validationState === ComboBoxValidationStateEnum.Invalid
                  ? `
                  !ring-red-400
    
                  [&_~_label]:!text-red-400
                  
                  [&_~_.combo-box-trigger]:!bg-red-400
                  [&_~_.combo-box-trigger]:!text-neutral-primary-50
                  
                  [&:focus_~_label]:!text-red-400
                  `
                  : ``
              }
              `
            : `
            invalid:!ring-red-400
    
            [&:invalid_~_label]:!text-red-400
            
            [&:invalid_~_.combo-box-trigger]!:bg-red-400
            [&:invalid_~_.combo-box-trigger]:!text-neutral-primary-50
            
            [&:focus:invalid_~_label]:!text-red-400
            `
        }
        `
      : ``
  }
  `
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
