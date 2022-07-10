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
  itemsType,
}: cart_list_type) {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // remove specific word and contract Mark designation
  function shortName() {
    console.log("change name", name);

    const removeWord = ["headphones", "earphones", "speaker"];

    for (const iterator of removeWord) {
      if (name.toLowerCase().includes(iterator.toLowerCase())) {
        return name
          .toLowerCase()
          .replace(iterator.toLowerCase(), "")
          .replace("mark", "MK")
          .toUpperCase();
      }
    }

    return name.toUpperCase();
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

          {
            //find an idea to use as a child
            itemsType === "cart" && <Update_cart {...props} />
          }
          {itemsType !== "cart" && <p>{`X ${qty}`}</p>}
        </div>
        {isDelete && itemsType === "itemsType" && (
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
