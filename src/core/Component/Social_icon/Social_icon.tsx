import React from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookIcons,
  InstagramIcons,
  TwitterIcons,
} from "../../assets/SVG/Icons/Icons";

export default function Social_icon() {
  return (
    <>
      <NavLink to="wwww.facebook.com">
        <FacebookIcons></FacebookIcons>
      </NavLink>
      <NavLink to="wwww.twitter.com">
        <TwitterIcons></TwitterIcons>
      </NavLink>
      <NavLink to="wwww.instagram.com">
        <InstagramIcons></InstagramIcons>
      </NavLink>
    </>
  );
}
