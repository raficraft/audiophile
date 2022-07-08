import React from "react";
import { NavLink } from "react-router-dom";
import S from "./Btn.module.scss";

type Btn_props = {
  params: {
    mode: string;
    text: string;
    cssName?: string[];
    link?: string;
  };
  callback?: () => void;
};

/**
 *
 * @param params.mode
 * @param params.text
 * @param params.cssName?
 * @param params.link?
 * @param callBack?
 *
 * @returns JSX.element
 */

export default function Btn({ params, callback }: Btn_props) {
  function makeCss() {
    if (params.cssName) {
      const cssArray = params.cssName.map((style, key) => {
        return S[`${style}`];
      });

      return cssArray.join(" ");
    }
  }

  switch (params.mode) {
    case "btn":
      return (
        <button
          className={`btn ${makeCss()}`}
          onClick={() => {
            callback && callback();
          }}
        >
          {params.text}
        </button>
      );

    case "link_and_callback":
      if (!callback) {
        callback = () => {};
      }

      return (
        <NavLink
          to={`${params.link}`}
          className={`btn ${makeCss()}`}
          onClick={() => {
            callback && callback();
          }}
        >
          {params.text}
        </NavLink>
      );

    case "link":
      return (
        <NavLink to={`${params.link}`} className={`btn ${makeCss()}`}>
          {params.text}
        </NavLink>
      );

    default:
      return null;
  }
}
