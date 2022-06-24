import React from "react";
import { NavLink } from "react-router-dom";
import S from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={S.nav_header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">headphones</NavLink>
      <NavLink to="/">speakers</NavLink>
      <NavLink to="/">earphones</NavLink>
    </nav>
  );
}
