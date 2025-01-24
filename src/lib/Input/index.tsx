// Packages
import { createEffect, createSignal, Show } from "solid-js";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  LabelStyles,
} from "./styles";

// Types
import {
  InputTypeEnum,
  InputValidationState,
  InputValidationStateEnum,
  Props,
} from "./types";

export default function Input({
  className = "",
  description,
  errorMessage,
  id,
  inputClass = "",
  max,
  maxLength,
  min,
  minLength,
  name,
  onChange,
  pattern,
  required,
  type = InputTypeEnum.text,
  value,
  ...rest
}: Props) {
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validationState, setValidationState] =
    createSignal<InputValidationState>(InputValidationStateEnum.Valid);

  const isInvalid = () =>
    validationState() === InputValidationStateEnum.Invalid;

  const ariaDescribedBy = `${description ? `${id}-description` : ""} ${errorMessage && isInvalid() ? `${id}-error-message` : ""}`;

  createEffect(() => {
    const inputValue = value();

    if (receivedFocus()) {
      if (required && !inputValue) {
        setValidationState(InputValidationStateEnum.Invalid);
      } else if (
        (!!inputValue &&
          typeof inputValue === "string" &&
          (minLength || minLength === 0) &&
          String(inputValue).length < minLength) ||
        (maxLength && String(inputValue).length > maxLength)
      ) {
        setValidationState(InputValidationStateEnum.Invalid);
      } else if (
        (!!inputValue &&
          type === InputTypeEnum.number &&
          (min || min === 0) &&
          Number(inputValue) < min) ||
        (max && Number(inputValue) > max)
      ) {
        setValidationState(InputValidationStateEnum.Invalid);
      } else if (
        !!inputValue &&
        pattern &&
        !RegExp(pattern).test(String(inputValue))
      ) {
        setValidationState(InputValidationStateEnum.Invalid);
      } else {
        setValidationState(InputValidationStateEnum.Valid);
      }
    }
  });

  return (
    <div class={`${className} ${ContainerStyles({})}`}>
      <input
        {...rest}
        {...(description || errorMessage
          ? { "aria-describedby": ariaDescribedBy }
          : {})}
        class={`${inputClass} ${InputStyles({
          hasValue: !!value() || value() === 0,
          receivedFocus: receivedFocus(),
        })}`}
        id={id}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setReceivedFocus(true)}
        pattern={pattern}
        required={required}
        type={type}
        value={value() ?? undefined}
      />
      <label class={LabelStyles} for={id}>
        {name}
      </label>
      <Show when={description || (errorMessage && isInvalid())}>
        <div class="mt-2">
          <Show when={description}>
            <div class={DescriptionStyles} id={`${id}-description`}>
              {description}
            </div>
          </Show>
          <Show when={errorMessage && isInvalid()}>
            <div class={ErrorMessageStyles} id={`${id}-error-message`}>
              {description}
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
}
