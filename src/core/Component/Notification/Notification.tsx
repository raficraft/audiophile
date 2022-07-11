import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { notification_type } from "../../Typescript/types/types";

import S from "./Notification.module.scss";

import { UI_context_type, UI_context } from "../../context/UI_Provider";

export default function Notification({ message, type }: notification_type) {
  const { UI, callback } = useContext(UI_context) as UI_context_type;

  return createPortal(
    <div
      className={`${S.notification} ${S[`notif_${type}`]}`}
      data-show={UI.notification.show}
    >
      <p>{message}</p>
    </div>,
    document.body
  );
}
