import React from "react";

import image_hero_desktop from "../../../assets/home/desktop/image-hero.jpg";
import image_hero_mobile from "../../../assets/home/mobile/image-hero.jpg";
import image_hero_tablet from "../../../assets/home/tablet/image-hero.jpg";
import useLoadImage from "../../hooks/useLoadImage";

import S from "./Hero_home.module.scss";
import Btn from "../button/Btn/Btn";

export default function Hero_home() {
  const [imgDesktop] = useLoadImage(image_hero_desktop);
  const [imgTablet] = useLoadImage(image_hero_tablet);
  const [imgMobile] = useLoadImage(image_hero_mobile);

  return (
    <section className={`wrapper_layout hero_layout`}>
      <div className="wrapper_inside">
        <div className={S.hero_content}>
          <div className={S.img_container}>
            <img
              src={imgMobile.src}
              width={imgMobile.x}
              height={imgMobile.y}
              className={`${S.responsive_img} ${S.size_375}`}
            />

            <img
              src={imgTablet.src}
              width={imgTablet.x}
              height={imgTablet.y}
              className={`${S.responsive_img} ${S.size_768}`}
            />

            <img
              src={imgDesktop.src}
              width={imgDesktop.x}
              height={imgDesktop.y}
              className={`${S.responsive_img} ${S.size_1440}`}
            />
          </div>

          <div className={S.overprint}>
            <div className={S.overprint_content}>
              <p className="text_overline__grey">new product</p>
              <h1 className="text_white ">XX99 Mark II Headphones</h1>
              <p className="text_white__smooth">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Btn
                params={{
                  mode: "link",
                  text: "See product",
                  cssName: ["btn_primary", "btn_primary__std"],
                  link: "/product/xx99-mark-two-headphones",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
