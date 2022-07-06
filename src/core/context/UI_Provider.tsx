import React, { createContext, useState, Dispatch } from "react";
import { callbackify } from "util";

type UI_Provider_props = {
  children: JSX.Element;
};

export type UI_context_type = {
  UI: { modal: boolean; notification: { show: boolean; message: string } };
  callback: {
    openModal: () => void;
    openNotification: (message: string) => void;
    closeNotification: () => void;
  };
  setUI?: Dispatch<boolean>;
};

export const UI_context = createContext<UI_context_type | null>(null);
export default function UI_provider({ children }: UI_Provider_props) {
  /**
   * Modal Initial Context
   */
  const [UI, setUI] = useState({
    modal: false,
    notification: {
      show: false,
      message: "",
    },
  });

  const hiddenScrollBar = () => {
    let htmlElt = document.documentElement;
    let bodyElt = document.body;
    //Enlève la scrollbar lors de l'ouverture du carousel.
    htmlElt.scrollTop = 0;
    bodyElt.scrollTop = 0;
    bodyElt.style.overflow = "hidden";
  };

  const restoreScrollBar = () => {
    let bodyElt = document.body;
    bodyElt.style.overflow = "";
  };

  const callback = {
    openModal: () => {
      setUI((S) => ({ ...S, modal: !UI.modal }));
    },

    openNotification: (message: string) => {
      setUI((S) => ({ ...S, notification: { show: true, message: message } }));
      setTimeout(() => {
        callback.closeNotification();
      }, 5000);
    },

    closeNotification: () => {
      setUI((S) => ({ ...S, notification: { show: false, message: "" } }));
    },
  };

  //   function openModal(target) {
  //     for (const key in modal) {
  //       if (Object.hasOwnProperty.call(modal, key)) {
  //         if (key !== target) {
  //           setModal((s) => ({ ...s, [key]: false }));
  //           hiddenScrollBar();
  //         }
  //       }
  //     }

  //     setModal((s) => ({ ...s, [target]: true }));
  //   }

  //   function closeModal() {
  //     setModal(() => {
  //       for (const key in modal) {
  //         if (Object.hasOwnProperty.call(modal, key)) {
  //           setModal((s) => ({ ...s, [key]: false }));
  //           restoreScrollBar();
  //         }
  //       }
  //     });
  //   }

  return (
    <UI_context.Provider value={{ UI, callback }}>
      {children}
    </UI_context.Provider>
  );
}
