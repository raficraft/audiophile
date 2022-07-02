import React from "react";
import { NavLink } from "react-router-dom";
import useLoadImage from "../../../hooks/useLoadImage";
import S from "./Navigation_mobil_item.module.scss";

interface img_items {
  src: string;
  title: string;
  link: string;
}

export default function Navigation_mobil_item({ src, title, link }: img_items) {
  const [imgInfo] = useLoadImage(src);

  return (
    <NavLink to="/" className={S.nav_item}>
      <header>
        <div className={S.img_container}>
          <img src={imgInfo.src} width={imgInfo.x} height={imgInfo.y}></img>
        </div>
      </header>

      <div className={S.item_content}>
        <p className={S.title}>{title}</p>
        <NavLink to={link}>
          <a type="button" className="btn btn_arrow">
            shop
          </a>
        </NavLink>
      </div>
    </NavLink>
  );
}
