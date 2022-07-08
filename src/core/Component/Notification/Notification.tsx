import React from "react";
import { createPortal } from "react-dom";
import { notification_type } from "../../Typescript/types/types";

import S from "./Notification.module.scss";

export default function Notification({ message, type }: notification_type) {
  return createPortal(
    <div className={`${S.notification} ${S[`notif_${type}`]}`}>
      <p>{message}</p>
    </div>,
    document.body
  );
}
