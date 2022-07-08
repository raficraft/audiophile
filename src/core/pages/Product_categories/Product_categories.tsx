import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch/useFetch";
import List_product_category from "../../Component/List_product_category/List_product_category";
import { ConsumedProduct } from "../../Typescript/types/types";
import GradientLoader from "../../Component/Loader/Gradient_loader";
import Navigation_home from "../../Component/Navigation_home/Navigation_home";
import Sticker_product from "../../Component/Sticker_product/Sticker_product";

import S from "./Product_categories.module.scss";

import image_best_gear_desktop from "../../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_tablet from "../../../assets/shared/tablet/image-best-gear.jpg";
import image_best_gear_mobil from "../../../assets/shared/mobile/image-best-gear.jpg";
import useLoadImage from "../../hooks/useLoadImage";

//Type of used field of JSON files sort by Category

export default function Product_categories() {
  const { category } = useParams();
  const [fetchData] = useFetch(category);
  const [currentData, setCurrentData] = useState<ConsumedProduct[]>([]);

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

  function getCategory(data: ConsumedProduct[]) {
    return data.filter((el) => el.category === category);
  }

  useEffect(() => {
    setCurrentData(getCategory(fetchData.currentData));
  }, [fetchData.loading, category]);
  return (
    <>
      <section id="header_categories" className="wrapper_layout push_loader">
        <div className="wrapper_inside flexCenter">
          <h1 className="text_white">{category}</h1>
        </div>
      </section>
      <section id="portal_target" className="wrapper_layout">
        <div id="categories_inside" className="wrapper_inside">
          {fetchData.loading === true ? (
            <GradientLoader></GradientLoader>
          ) : (
            <>
              <List_product_category data={currentData}></List_product_category>
              <div className={S.list_categories}>
                <Navigation_home></Navigation_home>
                <Sticker_product
                  cssName="best_product"
                  title={
                    <h3>
                      Bringing you the <span className="text_orange">best</span>{" "}
                      audio gear
                    </h3>
                  }
                  text={
                    <p className="text text_white">
                      Located at the heart of New York City, Audiophile is the
                      premier store for high end headphones, earphones,
                      speakers, and audio accessories. We have a large showroom
                      and luxury demonstration rooms available for you to browse
                      and experience a wide range of our products. Stop by our
                      store to meet some of the fantastic people who make
                      Audiophile the best place to buy your portable audio
                      equipment.
                    </p>
                  }
                  multiSrc={best_gear_images_array}
                ></Sticker_product>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
