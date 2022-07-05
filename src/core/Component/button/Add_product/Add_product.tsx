import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, MockProduct } from "../../../redux/slice/caddySlice";
import { controlCaddy } from "../../../utils/controlCaddy/controlCaddy";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit";
import Notification from "../../Notification/Notification";

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
  const [showNotification, setShowNotification] = useState({
    state: false,
    message: "",
  });
  function addTocart() {
    console.log(window.localStorage);
    if (inputRef && inputRef.current) {
      qty = Number(inputRef.current.value);
    }

    if (inputRef && inputRef.current) {
      inputRef.current.value = "1";
    }
    console.log("hein", products);

    const isValidCaddy = controlCaddy(products);

    if (isValidCaddy.error) {
      pushNotification(isValidCaddy.message);
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

  function pushNotification(message: string) {
    if (!showNotification.state) {
      setShowNotification((S) => ({ ...S, state: true, message: message }));
      setTimeout(() => {
        setShowNotification((S) => ({
          ...S,
          state: false,
          message: "",
        }));
      }, 5000);
    }
  }

  function increment(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      const maxQty = inputRef.current.getAttribute("max")!;
      if (Number(inputRef.current.value) >= 1) {
        const addOneItem = String(parseInt(inputRef.current.value) + 1);

        console.log(Number(maxQty));
        console.log(Number(addOneItem));

        if (Number(addOneItem) <= Number(maxQty)) {
          inputRef.current.value = addOneItem;
        } else {
          pushNotification(
            "vous ne pouvez commande + de 20 produits à la fois"
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

  useEffect(() => {});
  return (
    <>
      <div className={`flex gap_16`}>
        <div className="input_number">
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
      {showNotification.state && (
        <Notification text={showNotification.message} />
      )}
    </>
  );
}
