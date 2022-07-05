import React, { useState } from "react";
import { clearCaddy } from "../../redux/slice/caddySlice";
import { useAppDispatch, useAppSelector } from "../hooks/toolkit";
import S from "./Cart.module.scss";
import Cart_List from "./Cart_List/Cart_List";

export default function Cart() {
  const products = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [qtyInCart, setQtyInCart] = useState(getTotalProducts());

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
      const productInfo = products.caddy[Number(idx)];
      return <Cart_List {...productInfo} key={key}></Cart_List>;
    });
  }

  return (
    <div className={S.modal}>
      <section className="wrapper_layout">
        <div className="wrapper_inside relative">
          <div className={S.cart}>
            <header>
              <p>Cart {qtyInCart}</p>
              <button
                onClick={(event) => {
                  emptyCaddy(event);
                }}
              >
                Remove ALL
              </button>
            </header>
            <div className={S.cart_list__container}>{cart_listing()}</div>
            <footer>TOTAL PRICE</footer>
          </div>
        </div>
      </section>
    </div>
  );
}
