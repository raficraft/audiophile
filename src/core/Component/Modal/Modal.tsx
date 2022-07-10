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
  const [topPosition, setTopPosition] = useState("0px");
  const { UI, callback } = useContext(UI_context) as UI_context_type;
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
      style={{ top: topPosition, height: `calc(100% - ${topPosition})` }}
      onClick={() => {
        callback.openModal();
      }}
    >
      {children}
    </div>,
    document.body
  );
}
