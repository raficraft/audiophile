import React from "react";
import S from "./Modal.module.scss";
import { createPortal } from "react-dom";

type Modal_props = {
  children: JSX.Element;
};

export default function Modal({ children }: Modal_props) {
  return createPortal(<div className={S.modal}>{children}</div>, document.body);
}
