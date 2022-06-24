import React from "react";
import { NavLink } from "react-router-dom";
import { CaddyIcons, Logo } from "../../assets/SVG/Icons/Icons";
import Navigation from "../Navigation/Navigation";
import Navigation_mobil from "../Navigation_mobil/Navigation_mobil";
import Burger_Menu from "./../Burger_menu/Burger_menu";
import S from "./Header.module.scss";

export default function Header() {
  return (
    <section id="header_layout" className="wrapper_layout header_layout">
      <div className="wrapper_inside wrapp">
        <header className={S.header}>
          <Burger_Menu></Burger_Menu>
          <div className={S.logo}>
            <NavLink to="/">
              <Logo></Logo>
            </NavLink>
          </div>
          <Navigation></Navigation>
          <div className={S.SVG_container}>
            <CaddyIcons></CaddyIcons>
          </div>
        </header>
      </div>
    </section>
  );
}
