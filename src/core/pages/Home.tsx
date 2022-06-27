import React from "react";
import Hero_home from "../Component/Hero_home/Hero_home";
import Navigation_home from "../Component/Navigation_home/Navigation_home";
import Sticker_product from "../Component/Sticker_product/Sticker_product";
import image_earphones_desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import image_earphones_tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import image_earphones_mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";

import image_speakers_desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import image_speakers_tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import image_speakers_mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import useLoadImage from "../hooks/useLoadImage";

export default function Home() {
  const earphones_images_array = [
    {
      src: useLoadImage(image_earphones_desktop),
      media: 1440,
      nameStyle: "size_1440 responsive_img",
    },
    {
      src: useLoadImage(image_earphones_tablet),
      media: 768,
      nameStyle: "size_768 responsive_img",
    },
    {
      src: useLoadImage(image_earphones_mobile),
      media: 375,
      nameStyle: "size_375 responsive_img",
    },
  ];

  const speakers_images_array = [
    {
      src: useLoadImage(image_speakers_desktop),
      media: 1440,
      nameStyle: "size_1440 responsive_img",
    },
    {
      src: useLoadImage(image_speakers_tablet),
      media: 768,
      nameStyle: "size_768 responsive_img",
    },
    {
      src: useLoadImage(image_speakers_mobile),
      media: 375,
      nameStyle: "size_375 responsive_img",
    },
  ];
  return (
    <>
      <Hero_home></Hero_home>
      <section className="wrapper_layout">
        <div className="wrapper_inside">
          <div className="home_content">
            <Navigation_home></Navigation_home>
            <Sticker_product
              cssName="fullSize_imageAbsolute"
              title="zx7 speaker"
              multiSrc={speakers_images_array}
            ></Sticker_product>
            <Sticker_product
              cssName="separate_roundend"
              title="yx1 earphones"
              multiSrc={earphones_images_array}
            ></Sticker_product>
          </div>
        </div>
      </section>
    </>
  );
}
