import React, { useLayoutEffect, useState } from "react";

import image_hero_desktop from "../../../assets/home/desktop/image-hero.jpg";
import image_hero_mobile from "../../../assets/home/mobile/image-hero.jpg";
import image_hero_tablet from "../../../assets/home/tablet/image-hero.jpg";
import useLoadImage from "../../hooks/useLoadImage";

import S from "./Hero_home.module.scss";
import useMediaQuery from "../hooks/useMediaQueries";

export default function Hero_home() {
  const [imgDesktop] = useLoadImage(image_hero_desktop);
  const [imgTablet] = useLoadImage(image_hero_tablet);
  const [imgMobile] = useLoadImage(image_hero_mobile);

  const isMobil = useMediaQuery("(max-width : 600px)");
  const isTablet = useMediaQuery("(min-width : 601px) and (max-width : 960px)");
  const isDesktop = useMediaQuery("(min-width : 961px)");

  const [topPosition, setTopPosition] = useState("0px");

  useLayoutEffect(() => {
    const header: HTMLElement | null = document.getElementById("header_layout");
    if (header) {
      const styles_header = window.getComputedStyle(header);
      setTopPosition(styles_header.height);
    }
  }, []);

  return (
    <section
      className={`wrapper_layout hero_layout`}
      style={{ transform: `translateY(-${topPosition})` }}
    >
      <div className={S.hero_content}>
        <div className={S.img_container}>
          {isMobil && (
            <img src={imgMobile.src} width={imgMobile.x} height={imgMobile.y} />
          )}
          {isTablet && (
            <img src={imgTablet.src} width={imgTablet.x} height={imgTablet.y} />
          )}
          {isDesktop && (
            <img
              src={imgDesktop.src}
              width={imgDesktop.x}
              height={imgDesktop.y}
            />
          )}
        </div>
      </div>
    </section>
  );
}
