import React, { useLayoutEffect, useState } from "react";

import image_hero_desktop from "../../../assets/home/desktop/image-hero.jpg";
import image_hero_mobile from "../../../assets/home/mobile/image-hero.jpg";
import image_hero_tablet from "../../../assets/home/tablet/image-hero.jpg";
import useLoadImage from "../../hooks/useLoadImage";

import S from "./Hero_home.module.scss";
import useMediaQuery from "../hooks/useMediaQueries";
import { NavLink } from "react-router-dom";

export default function Hero_home() {
  const [imgDesktop] = useLoadImage(image_hero_desktop);
  const [imgTablet] = useLoadImage(image_hero_tablet);
  const [imgMobile] = useLoadImage(image_hero_mobile);

  const isMobil = useMediaQuery("(max-width : 600px)");
  const isTablet = useMediaQuery("(min-width : 601px) and (max-width : 960px)");
  const isDesktop = useMediaQuery("(min-width : 961px)");

  return (
    <section className={`wrapper_layout hero_layout`}>
      <div className="wrapper_inside">
        <div className={S.hero_content}>
          <div className={S.img_container}>
            {isMobil && (
              <img
                src={imgMobile.src}
                width={imgMobile.x}
                height={imgMobile.y}
              />
            )}
            {isTablet && (
              <img
                src={imgTablet.src}
                width={imgTablet.x}
                height={imgTablet.y}
              />
            )}
            {isDesktop && (
              <img
                src={imgDesktop.src}
                width={imgDesktop.x}
                height={imgDesktop.y}
              />
            )}
          </div>

          <div className={S.overprint}>
            <div className={S.overprint_content}>
              <p className="text_overline__grey">new product</p>
              <h1 className="text_withe">XX99 Mark II Headphones</h1>
              <p className="text_withe__smooth">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <NavLink to="/" className="btn btn_primary">
                see product
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// style={{ transform: `translateY(-${topPosition})` }}

// style={{
//     transform: `translateY(${topPosition})`,
//     maxHeight: `calc(100% - ${topPosition})`,
//   }}
