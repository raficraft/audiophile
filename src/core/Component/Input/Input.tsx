import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { input_type } from "../../Typescript/types/types";
import { validity_input } from "./validity_input";

const Input = React.forwardRef(
  (
    { type, name, label, placeholder, pattern, cssName = "" }: input_type,
    ref
  ) => {
    const inputRef = React.createRef<HTMLInputElement>()!;
    const errorMessage = React.createRef<HTMLParagraphElement>()!;

    function controlCapture() {
      if (errorMessage.current && inputRef.current) {
        const error = validity_input(inputRef);
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

    switch (type) {
      case "text" || "email" || "password":
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
            <label htmlFor="money" className="fakeContainer">
              {label}
              <label className="fakeBox" data-ischecked="false"></label>
            </label>
            <input type="radio" id={name} name={name} />
          </div>
        );

      default:
        return null;
    }
  }
);

export default Input;
