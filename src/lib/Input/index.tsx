// Packages
import {
  createEffect,
  createSignal,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

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

export default function Input(initialProps: Props) {
  const mergedProps = mergeProps({
    className: "",
    inputClass: "",
    type: InputTypeEnum.text,
    validationState: InputValidationStateEnum.Valid,
  }, initialProps);

  const [props, rest] = splitProps(mergedProps, ["className", "description", "errorMessage", "id", "inputClass", "max", "maxLength", "min", "minLength", "name", "onChange", "pattern", "required", "type", "validationState", "value"])
  const [receivedFocus, setReceivedFocus] = createSignal(false);
  const [validation, setValidation] = createSignal<InputValidationState>(
    InputValidationStateEnum.Valid,
  );

  const isInvalid = () =>
    validation() === InputValidationStateEnum.Invalid ||
    props.validationState === InputValidationStateEnum.Invalid;

  const ariaDescribedBy = `${props.description ? `${props.id}-description` : ""} ${props.errorMessage && isInvalid() ? `${props.id}-error-message` : ""}`;

  createEffect(() => {
    const inputValue = props.value();

    if (receivedFocus()) {
      if (props.required && !inputValue) {
        setValidation(InputValidationStateEnum.Invalid);
      } else if (
        (!!inputValue &&
          typeof inputValue === "string" &&
          (props.minLength || props.minLength === 0) &&
          String(inputValue).length < props.minLength) ||
        (props.maxLength && String(inputValue).length > props.maxLength)
      ) {
        setValidation(InputValidationStateEnum.Invalid);
      } else if (
        (!!inputValue &&
          props.type === InputTypeEnum.number &&
          (props.min || props.min === 0) &&
          Number(inputValue) < props.min) ||
        (props.max && Number(inputValue) > props.max)
      ) {
        setValidation(InputValidationStateEnum.Invalid);
      } else if (
        !!inputValue &&
        props.pattern &&
        !RegExp(props.pattern).test(String(inputValue))
      ) {
        setValidation(InputValidationStateEnum.Invalid);
      } else {
        setValidation(InputValidationStateEnum.Valid);
      }
    }
  });

  return (
    <div class={`${props.className} ${ContainerStyles({})}`}>
      <input
        {...rest}
        {...(props.description || props.errorMessage
          ? { "aria-describedby": ariaDescribedBy }
          : {})}
        class={`${props.inputClass} ${InputStyles({
          hasValue: !!props.value() || props.value() === 0,
          receivedFocus: receivedFocus(),
        })}`}
        id={props.id}
        max={props.max}
        maxLength={props.maxLength}
        min={props.min}
        minLength={props.minLength}
        name={props.name}
        onBlur={() => setReceivedFocus(true)}
        onChange={(e) => props.onChange(e.target.value)}
        pattern={props.pattern}
        required={props.required}
        type={props.type}
        value={props.value() ?? undefined}
      />
      <label class={LabelStyles} for={props.id}>
        {props.name}
      </label>
      <Show when={props.description || (props.errorMessage && isInvalid())}>
        <div class="mt-2">
          <Show when={props.description}>
            <div class={DescriptionStyles} id={`${props.id}-description`}>
              {props.description}
            </div>
          </Show>
          <Show when={props.errorMessage && isInvalid()}>
            <div class={ErrorMessageStyles} id={`${props.id}-error-message`}>
              {props.description}
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
}
