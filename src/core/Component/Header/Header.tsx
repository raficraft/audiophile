import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CaddyIcons, Logo } from "../../assets/SVG/Icons/Icons";
import Cart from "../Cart/Cart";
import Navigation from "../Navigation/Navigation";
import Burger_Menu from "./../Burger_menu/Burger_menu";
import S from "./Header.module.scss";
import Modal from "../Modal/Modal";
import { UI_context, UI_context_type } from "../../context/UI_Provider";
import { useAppSelector } from "../hooks/toolkit";

export default function Header() {
  const { UI, callback } = useContext(UI_context) as UI_context_type;

  function renderModal() {
    if (UI.modal || UI.modal === "reverse") {
      return (
        <Modal>
          <section className="wrapper_layout">
            <div className="wrapper_inside relative" id="cart_wrapper">
              <Cart itemsType="cart" />
            </div>
          </section>
        </Modal>
      );
    }
  }

  return (
    <>
      <section
        id="header_layout"
        className="wrapper_layout header_layout push_loader"
        onClick={() => {
          UI.modal && callback.closeModal();
        }}
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
                  !UI.modal ? callback.openModal(true) : callback.closeModal();
                }}
              ></CaddyIcons>
            </div>
          </header>
        </div>
      </section>
      {renderModal()}
    </>
  );
}
