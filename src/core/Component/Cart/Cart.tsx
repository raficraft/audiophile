import React from "react";
import S from "./Cart.module.scss";
import { createPortal } from "react-dom";

export default function Cart() {
  return createPortal(
    <div className={S.modal}>
      <div className={S.cart}>Cart</div>
    </div>,
    document.body
  );
}
