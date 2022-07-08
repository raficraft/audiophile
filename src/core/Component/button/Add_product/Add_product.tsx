import React, { useEffect, useContext } from "react";
import { addProduct, MockProduct } from "../../../redux/slice/caddySlice";
import { controlCaddy } from "../../../utils/controlCaddy/controlCaddy";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit";
import Notification from "../../Notification/Notification";
import S from "./Add_product.module.scss";

import { UI_context, UI_context_type } from "../../../context/UI_Provider";

export default function Add_product({
  id,
  name,
  price,
  qty,
  slug,
}: MockProduct) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { UI, callback } = useContext(UI_context) as UI_context_type;

  function addTocart() {
    console.log(window.localStorage);
    if (inputRef && inputRef.current) {
      qty = Number(inputRef.current.value);
    }

    if (inputRef && inputRef.current) {
      inputRef.current.value = "1";
    }

    const isValidCaddy = controlCaddy(products, price);

    if (isValidCaddy.error) {
      callback.openNotification(isValidCaddy.message, "alert");
      return false;
    }

    dispatch(
      addProduct({
        id,
        name,
        slug,
        price,
        qty: qty,
      })
    );

    const makeMessage = ``;

    callback.openNotification(isValidCaddy.message, "alert");
    addInstorage();
  }

  function decrement(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      if (Number(inputRef.current.value) >= 1) {
        const newVal = String(parseInt(inputRef.current.value) - 1);
        inputRef.current.value = newVal === "0" ? "1" : newVal;
      }
    }
  }

  function increment(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      const maxQty = inputRef.current.getAttribute("max")!;
      if (Number(inputRef.current.value) >= 1) {
        const addOneItem = String(parseInt(inputRef.current.value) + 1);

        if (Number(addOneItem) <= Number(maxQty)) {
          inputRef.current.value = addOneItem;
        } else {
          callback.openNotification(
            "You cannot order more than 20 products",
            "alert"
          );
        }
      }
    }
  }

  function addInstorage() {
    const oldItems = JSON.parse(localStorage.getItem("caddy") || "[]")
      ? JSON.parse(localStorage.getItem("caddy") || "[]")
      : [];

    const newItems: MockProduct[] = { ...oldItems, ...products };

    localStorage.setItem("caddy", JSON.stringify(newItems));
  }

  useEffect(() => {
    addInstorage();
  }, [products]);
  return (
    <>
      <div className={`flex gap_16`}>
        <div className={S.input_number}>
          <button
            type="button"
            onClick={(event) => {
              decrement(event);
            }}
          >
            -
          </button>
          <input
            type="number"
            defaultValue="1"
            ref={inputRef}
            min="1"
            max="20"
          />
          <button
            type="button"
            onClick={(event) => {
              increment(event);
            }}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="btn btn_primary"
          onClick={() => {
            addTocart();
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
