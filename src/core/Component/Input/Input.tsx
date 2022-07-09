import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
import { input_type } from "../../Typescript/types/types";
import { validity_input } from "./validity_input";

const Input = React.forwardRef(
  (
    {
      type,
      name,
      label,
      placeholder,
      pattern,
      cssName = "",
      groupName = "",
      checked = false,
    }: input_type,
    ref
  ) => {
    const inputRef = React.createRef<HTMLInputElement>()!;
    const errorMessage = React.createRef<HTMLParagraphElement>()!;
    const [isChecked, setIsChecked] = useState(checked);

    function controlCapture() {
      if (errorMessage.current && inputRef.current) {
        const error = validity_input(inputRef.current);
        errorMessage.current.textContent = error;
      }
    }

    useImperativeHandle(ref, () => ({
      get input() {
        return inputRef.current;
      },
      get error() {
        return errorMessage.current;
      },
    }));

    function handleRadio(event: React.MouseEvent<HTMLLabelElement>) {
      console.log("yolo");
      setIsChecked(!isChecked);
    }

    switch (type) {
      case "text":
      case "email":
      case "password":
        return (
          <div className={`bloc_input ${cssName}`}>
            <div className="bloc_input__head">
              {label && <label htmlFor={name}>{label}</label>}
              <span className="error_message_container">
                <p className="text_error" ref={errorMessage}></p>
              </span>
            </div>
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder ? placeholder : ""}
              pattern={pattern ? pattern : ""}
              className="input_text"
              ref={inputRef}
              onKeyUp={() => {
                controlCapture();
              }}
            />
          </div>
        );

      case "radio":
        return (
          <div className={`bloc_input__radio ${cssName}`}>
            <span className="error_message_container">
              <p className="text_error" ref={errorMessage}></p>
            </span>
            <label
              htmlFor={name}
              className="fakeContainer"
              onClick={(event) => {
                handleRadio(event);
              }}
            >
              {label}
              <label className="fakeBox" data-ischecked={isChecked}></label>
            </label>
            <input type="radio" id={name} name={groupName} ref={inputRef} />
          </div>
        );

      default:
        return null;
    }
  }
);

export default Input;
