import React from "react";
import Hero_home from "../Component/Hero_home/Hero_home";
import Navigation_home from "../Component/Navigation_home/Navigation_home";
import Sticker_product from "../Component/Sticker_product/Sticker_product";
import Sticker_home from "./importImage";

export default function Home() {
  return (
    <>
      <Hero_home></Hero_home>
      <section className="wrapper_layout">
        <div className="wrapper_inside">
          <div className="home_content">
            <Navigation_home></Navigation_home>
            <Sticker_home />
          </div>
        </div>
      </section>
    </>
  );
}
