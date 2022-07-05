import React, { useEffect, useState, useRef } from "react";
import { cart_list_type } from "../../../Typescript/types/types";
import Update_cart from "../../button/Update_cart/Update_cart";
import Notification from "../../Notification/Notification";

import S from "./Cart_list.module.scss";
import { useAppDispatch } from "../../hooks/toolkit";
import { removeProduct } from "../../../redux/slice/caddySlice";

export default function Cart_List({
  id,
  slug,
  name,
  price,
  qty,
}: cart_list_type) {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function shortName() {
    console.log("change name");

    const removeWord = ["headphones", "earphones", "speakers"];
    const nameArr = name.split(" ");
    return nameArr[0];
  }

  function deleteProduct() {
    dispatch(removeProduct(id));
  }

  function makeItem() {
    const props = { id, name, slug, qty, price, setter: setIsDelete };
    return (
      <div className={S.cart_list}>
        <div className={S.cart_list__content}>
          <header>
            <div className={S.img_container}>
              <img
                src={`/assets/cart/image-${slug}.jpg`}
                width={150}
                height={150}
              />
            </div>
            <div className={S.cart_details}>
              <p className="text bold">{shortName()}</p>
              <p className="text_dark__smooth bold">${price}</p>
            </div>
          </header>
          <Update_cart {...props} />
        </div>
        {isDelete && (
          <div className={S.action_callback}>
            <p>Delete this product ?</p>
            <span>
              <button
                className="delete"
                onClick={() => {
                  deleteProduct();
                }}
              >
                Yes
              </button>
              <button
                className="close"
                onClick={() => {
                  setIsDelete(false);
                }}
              >
                No
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }

  return <>{makeItem()}</>;
}
