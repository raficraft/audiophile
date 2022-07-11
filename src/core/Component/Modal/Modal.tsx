import React, {
  useLayoutEffect,
  useState,
  Dispatch,
  useEffect,
  useContext,
} from "react";
import S from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { UI_context, UI_context_type } from "../../context/UI_Provider";

type Modal_props = {
  children: JSX.Element;
};

export default function Modal({ children }: Modal_props) {
  const { UI, callback } = useContext(UI_context) as UI_context_type;

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      console.log(event.code);
      if (event.code === "Escape") {
        callback.closeModal();
      }
    });

    return () => {
      document.removeEventListener("keyup", (event) => {
        console.log(event.code);
        if (event.code === "Escape") {
          callback.closeModal();
        }
      });
    };
  }, []);

  return createPortal(
    <div
      className={S.modal}
      onClick={() => {
        callback.closeModal();
      }}
      data-show={UI.modal}
    >
      {children}
    </div>,
    document.body
  );
}
