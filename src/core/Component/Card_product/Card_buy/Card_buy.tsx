import { stringify } from "querystring";
import React from "react";
import Sticker_home from "../../../pages/importImage";
import {
  ConsumedProduct,
  img_JSON_import,
} from "../../../Typescript/types/types";
import Add_product from "../../button/Add_product/Add_product";
import Navigation_home from "../../Navigation_home/Navigation_home";
import Sticker_product from "../../Sticker_product/Sticker_product";
import Card_features from "../Card_features/Card_features";
import Multi_img from "../Multi_img/Multi_img";

//Best Gear Image all format

import image_best_gear_desktop from "../../../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_tablet from "../../../../assets/shared/tablet/image-best-gear.jpg";
import image_best_gear_mobil from "../../../../assets/shared/mobile/image-best-gear.jpg";
import useLoadImage from "../../../hooks/useLoadImage";
import Other_product from "../Other_product/Other_product";

export default function Card_buy({ data }: any) {
  // console.log(data);
  const id = data.id;
  const title = data.name;
  const slug = data.slug;
  const text = data.description;
  const price = data.price;
  const features = data.features;
  const subTitle = data.new ? "new product" : "";
  const inTheBox = data.includes;
  const currentImg: img_JSON_import = data.currentImg[0];
  const galleryImg: img_JSON_import[][] = data.galleryImg;
  const others_product: any[] = data.others;

  const best_gear_images_array = [
    {
      src: useLoadImage(image_best_gear_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_tablet),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_mobil),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  return (
    <>
      <Sticker_product
        cssName={"card_buy"}
        title={<h2>{title}</h2>}
        text={<p>{text}</p>}
        multiSrc={currentImg}
        subTitle={subTitle}
        price={<h6>$ {price}</h6>}
        button={
          <Add_product id={id} name={title} price={price} qty={1} slug={slug} />
        }
      ></Sticker_product>
      <Card_features features={features} inTheBox={inTheBox} />
      <Multi_img galleryImg={galleryImg} />

      <Other_product data={others_product} />

      <Navigation_home />

      <Sticker_product
        cssName="best_product"
        title={
          <h3>
            Bringing you the <span className="text_orange">best</span> audio
            gear
          </h3>
        }
        text={
          <p className="text text_white">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        }
        multiSrc={best_gear_images_array}
      ></Sticker_product>
    </>
  );
}
