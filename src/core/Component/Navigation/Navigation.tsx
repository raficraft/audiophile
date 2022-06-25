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
      <NavLink to="/">headphones</NavLink>
      <NavLink to="/">speakers</NavLink>
      <NavLink to="/">earphones</NavLink>
    </nav>
  );
}
