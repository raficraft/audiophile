import React, { useEffect, Dispatch, useContext } from "react";
import { MockProduct, updateQty } from "../../../redux/slice/caddySlice";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit";
import S from "./Update_cart.module.scss";

import { UI_context, UI_context_type } from "../../../context/UI_Provider";
import { controlCaddy } from "../../../utils/controlCaddy/controlCaddy";

export interface update_product {
  id: number;
  name: string;
  slug?: string;
  price: number;
  qty: number;
  img?: any;
  setter: Dispatch<boolean>;
}

export default function Update_cart({
  id,
  name,
  price,
  qty,
  slug,
  setter,
}: update_product) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const { UI, callback } = useContext(UI_context) as UI_context_type;

  function decrement(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      if (Number(inputRef.current.value) >= 1) {
        const addOneToCurrentValue = String(
          parseInt(inputRef.current.value) - 1
        );
        const qtyUpdate = parseInt(inputRef.current.value);
        inputRef.current.value = addOneToCurrentValue;
        if (qtyUpdate > 0) {
          dispatch(updateQty({ id, qty: qtyUpdate }));
        } else {
          setter(true);
          inputRef.current.value = "1";
        }
      }
    }
  }

  function validCaddy() {
    const isValidCaddy = controlCaddy(products, price);
    if (isValidCaddy.error) {
      pushNotification(isValidCaddy.message);
      return false;
    }
    return true;
  }

  function increment(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      const maxQty = inputRef.current.getAttribute("max")!;
      if (Number(inputRef.current.value) >= 0) {
        const addOneToCurrentValue = String(
          parseInt(inputRef.current.value) + 1
        );

        const checkCart = validCaddy();

        if (Number(addOneToCurrentValue) <= Number(maxQty) && checkCart) {
          inputRef.current.value = addOneToCurrentValue;
          const qtyUpdate = parseInt(inputRef.current.value);
          dispatch(updateQty({ id, qty: qtyUpdate }));
        }
      }
    }
  }

  function pushNotification(message: string) {
    if (!UI.notification.show) {
      callback.openNotification(message);
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
      <div className={S.update_cart}>
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
            defaultValue={qty}
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
      </div>
    </>
  );
}
