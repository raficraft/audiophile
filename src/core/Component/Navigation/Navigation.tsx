import React from "react";
import { NavLink } from "react-router-dom";
import S from "./Navigation.module.scss";

interface propsType {
  cssName: string;
}

export default function Navigation({ cssName }: propsType) {
  return (
    <nav className={`${S[cssName]}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories/headphones">headphones</NavLink>
      <NavLink to="/categories/speakers">speakers</NavLink>
      <NavLink to="/categories/earphones">earphones</NavLink>
    </nav>
  );
}
