import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaddyIcons, Logo } from "../../assets/SVG/Icons/Icons";
import Cart from "../Cart/Cart";
import Navigation from "../Navigation/Navigation";
import Burger_Menu from "./../Burger_menu/Burger_menu";
import S from "./Header.module.scss";
import Modal from "../Modal/Modal";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <section
        id="header_layout"
        className="wrapper_layout header_layout push_loader"
      >
        <div className="wrapper_inside wrapper_header">
          <header className={S.header}>
            <Burger_Menu></Burger_Menu>

            <NavLink to="/" title="home page" className={S.logo}>
              <Logo></Logo>
            </NavLink>

            <div className={S.nav_container}>
              <Navigation cssName="nav_header"></Navigation>
            </div>
            <div className={S.SVG_container}>
              <CaddyIcons
                onClick={() => {
                  setShowCart(!showCart);
                }}
              ></CaddyIcons>
            </div>
          </header>
        </div>
      </section>
      {showCart && (
        <Modal setter={setShowCart}>
          <Cart callback={setShowCart}></Cart>
        </Modal>
      )}
    </>
  );
}
