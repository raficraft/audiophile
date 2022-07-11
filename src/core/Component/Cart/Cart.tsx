import React, { useState, useEffect, Dispatch, useContext } from "react";
import { clearCaddy } from "../../redux/slice/caddySlice";
import { useAppDispatch, useAppSelector } from "../hooks/toolkit";
import S from "./Cart.module.scss";
import Cart_List from "./Cart_List/Cart_List";
import { UI_context, UI_context_type } from "../../context/UI_Provider";
import Btn from "../button/Btn/Btn";
import { Cart_props } from "../../Typescript/types/types";

//Typed with export type, no work with inside Type : string ???
export default function Cart({ itemsType, submit }: Cart_props) {
  const products = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [qtyInCart, setQtyInCart] = useState(0);
  const [bill, setBill] = useState({
    total: 0,
    totalVat: 0,
    grandTotal: 0,
  });
  const { UI, callback } = useContext(UI_context) as UI_context_type;

  function emptyCaddy(event: React.MouseEvent<HTMLButtonElement>) {
    dispatch(clearCaddy());
  }

  function getTotalProducts() {
    //Get product whit quantity is not null
    //Return All quantity value
    //Count quantity

    return products.caddy
      .filter((el: { qty: number }) => el.qty > 0)
      .map((el) => {
        return el.qty;
      })
      .reduce((prev, curr) => prev + curr, 0);
  }

  function cart_listing() {
    console.log("cart_list", products);

    return Object.keys(products.caddy).map((idx, key) => {
      const productInfo = products.caddy[Number(idx)]; //Deep copy || shallow copy ??
      return (
        <Cart_List {...productInfo} key={key} itemsType={itemsType}></Cart_List>
      );
    });
  }

  function getBill() {
    const total = products.caddy
      .filter((el: { qty: number }) => el.qty > 0)
      .map((el) => el.qty * el.price)
      .reduce((prev, curr) => prev + curr, 0);

    const totalVat = (total / (100 - UI.shop.vat)) * UI.shop.vat;
    const grandTotal = total + UI.shop.ship;

    return { total, totalVat, grandTotal };
  }

  useEffect(() => {
    setQtyInCart(getTotalProducts());
    const bill = getBill();
    setBill((S) => ({ ...S, ...bill }));
  }, [products]);

  return (
    <div
      className={S[itemsType]}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <header className={S.header_top}>
        <p className="bold uppercase">
          {itemsType}
          {itemsType === "cart" && `(${qtyInCart})`}
        </p>

        {itemsType === "cart" && (
          <button
            className="text_dark__smooth"
            onClick={(event) => {
              emptyCaddy(event);
            }}
          >
            Remove all
          </button>
        )}
      </header>
      <div className={S.cart_list__container}>{cart_listing()}</div>
      <footer className={S.bill_calc}>
        <span className={S.bill_item}>
          <p>TOTAL</p>
          <p className="bold">${bill.total}</p>
        </span>
        {itemsType !== "cart" && (
          <>
            <span className={S.bill_item}>
              <p>Shipping</p>
              <p className="bold">${UI.shop.ship}</p>
            </span>
            <span className={S.bill_item}>
              <p>
                VAT {"("}INCLUDED{")"}
              </p>
              <p className="bold">${bill.totalVat}</p>
            </span>
            <footer className={S.total_and_pay}>
              <span className={S.bill_item}>
                <p>GRAND TOTAL</p>
                <p className="bold">${bill.grandTotal}</p>
              </span>

              <Btn
                params={{
                  mode: "btn",
                  text: "continue & pay",
                  cssName: ["btn_primary"],
                }}
                callback={submit}
              />
            </footer>
          </>
        )}

        {itemsType === "cart" && (
          <Btn
            params={{
              mode: "link_and_callback",
              text: "checkout",
              cssName: ["btn_primary", "btn_primary__full"],
              link: "/checkout",
            }}
            callback={() => {
              callback.closeModal();
            }}
          />
        )}
      </footer>
    </div>
  );
}
