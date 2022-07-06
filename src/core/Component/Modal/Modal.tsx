import React, { useLayoutEffect, useState, Dispatch, useEffect } from "react";
import S from "./Modal.module.scss";
import { createPortal } from "react-dom";

type Modal_props = {
  setter: Dispatch<boolean>;
  children: JSX.Element;
};

export default function Modal({ setter, children }: Modal_props) {
  const [topPosition, setTopPosition] = useState("0px");
  useLayoutEffect(() => {
    const header: HTMLElement | null = document.getElementById("header_layout");
    if (header) {
      const styles_header = window.getComputedStyle(header);
      setTopPosition(styles_header.height);
    }
  }, []);

  return createPortal(
    <div
      className={S.modal}
      style={{ top: topPosition }}
      onClick={() => {
        setter(false);
      }}
    >
      {children}
    </div>,
    document.body
  );
}
