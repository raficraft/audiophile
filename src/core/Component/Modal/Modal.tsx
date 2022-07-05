import React, { useLayoutEffect, useState } from "react";
import S from "./Modal.module.scss";
import { createPortal } from "react-dom";

type Modal_props = {
  children: JSX.Element;
};

export default function Modal({ children }: Modal_props) {
  const [topPosition, setTopPosition] = useState("0px");
  useLayoutEffect(() => {
    const header: HTMLElement | null = document.getElementById("header_layout");
    if (header) {
      const styles_header = window.getComputedStyle(header);
      setTopPosition(styles_header.height);
    }
  }, []);
  return createPortal(
    <div className={S.modal} style={{ top: topPosition }}>
      {children}
    </div>,
    document.body
  );
}
