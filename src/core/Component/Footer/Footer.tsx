import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/SVG/Icons/Icons";
import Navigation from "../Navigation/Navigation";
import Social_icon from "../Social_icon/Social_icon";
import S from "./Footer.module.scss";

export default function Footer() {
  return (
    <section className="wrapper_layout footer_layout">
      <div className="wrapper_inside">
        <div className="footer_emphasis__color"></div>
        <div className={S.footer_content}>
          <header>
            <NavLink to="/" className={S.logo}>
              <Logo />
            </NavLink>
            <Navigation cssName="nav_footer" />
          </header>

          <div className={S.center_el}>
            <p className="text_white__smooth">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className={S.social_icon}>
              <Social_icon />
            </div>
          </div>
          <footer>
            <p className="text_white__smooth">
              Copyright 2021. All Rights Reserved
            </p>
            <div className={S.social_icon}>
              <Social_icon />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
