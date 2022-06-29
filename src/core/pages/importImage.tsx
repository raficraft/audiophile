//zx9 all format

import image_speakers_zx9_desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import image_speakers_zx9_tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import image_speakers_zx9_mobile from "../../assets/home/mobile/image-speaker-zx9.png";

//earphones Image all format

import image_earphones_desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import image_earphones_tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import image_earphones_mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";

//Speakers Image all format

import image_speakers_desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import image_speakers_tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import image_speakers_mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";

//Best Gear Image all format

import image_best_gear_desktop from "../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_tablet from "../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_mobil from "../../assets/shared/desktop/image-best-gear.jpg";

import useLoadImage from "../hooks/useLoadImage";
import Sticker_product from "../Component/Sticker_product/Sticker_product";

export default function Sticker_home() {
  const best_gear_images_array = [
    {
      src: useLoadImage(image_best_gear_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_mobil),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_tablet),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  const speakers_zx9_images_array = [
    {
      src: useLoadImage(image_speakers_zx9_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_speakers_zx9_tablet),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_speakers_zx9_mobile),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  const earphones_images_array = [
    {
      src: useLoadImage(image_earphones_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_earphones_tablet),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_earphones_mobile),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  const speakers_images_array = [
    {
      src: useLoadImage(image_speakers_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_speakers_tablet),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_speakers_mobile),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  return (
    <>
      <Sticker_product
        cssName="big_one"
        title={<h3>zx9 speaker</h3>}
        text="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        multiSrc={speakers_zx9_images_array}
        button={
          <button type="button" className="btn btn_secondary">
            see product
          </button>
        }
      ></Sticker_product>
      <Sticker_product
        cssName="fullSize_imageAbsolute"
        title={<h3>zx7 speaker</h3>}
        multiSrc={speakers_images_array}
        button={
          <button type="button" className="btn btn_secondary">
            see product
          </button>
        }
      ></Sticker_product>
      <Sticker_product
        cssName="separate_roundend"
        title={<h3>yx1 earphones</h3>}
        multiSrc={earphones_images_array}
        button={
          <button type="button" className="btn btn_secondary">
            see product
          </button>
        }
      ></Sticker_product>

      <Sticker_product
        cssName="best_product"
        title={
          <h3>
            Bringing you the <span className="text_orange">best</span> audio
            gear
          </h3>
        }
        text={
          "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        }
        multiSrc={best_gear_images_array}
      ></Sticker_product>
    </>
  );
}
