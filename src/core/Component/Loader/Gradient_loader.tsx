import React, { useLayoutEffect, useRef, useState } from "react";
import S from "./Gradient_loader.module.scss";
import { createPortal } from "react-dom";

export default function GradientLoader() {
  const [topPosition, setTopPosition] = useState("0px");

  //Calcute height for push the loader by the top
  useLayoutEffect(() => {
    const nav = [...Array.from(document.querySelectorAll(".push_loader"))];
    if (nav) {
      const elementHeight = [];

      for (const iterator of nav) {
        const val = window.getComputedStyle(iterator).height.slice(0, -2);
        elementHeight.push(Number(val));
      }
      const finalSize = elementHeight.reduce((a, b) => {
        return a + b;
      }, 0);
      setTopPosition(finalSize + "px");
    }
  }, []);

  return createPortal(
    <>
      <section className={S.gradient_loader} style={{ top: topPosition }}>
        <div className={S.container}>
          <div className={S.content}>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className={S.loader_text}>
            <p className="text_overline">Loading...</p>
          </div>
        </div>
      </section>
    </>,
    document.body
  );
}
