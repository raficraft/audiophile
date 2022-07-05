import React from "react";
import { createPortal } from "react-dom";
import { notification_type } from "../../Typescript/types/types";

import S from "./Notification.module.scss";

export default function Notification({ text }: notification_type) {
  return createPortal(
    <div className={S.notification}>
      <p>{text}</p>
    </div>,
    document.body
  );
}
