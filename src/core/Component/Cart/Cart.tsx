import React, { useState, useEffect, Dispatch, useContext } from "react";
import { NavLink } from "react-router-dom";
import { clearCaddy } from "../../redux/slice/caddySlice";
import { useAppDispatch, useAppSelector } from "../hooks/toolkit";
import S from "./Cart.module.scss";
import Cart_List from "./Cart_List/Cart_List";
import { UI_context, UI_context_type } from "../../context/UI_Provider";

type Cart_props = {
  callback: Dispatch<boolean>;
};

export default function Cart() {
  const products = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [qtyInCart, setQtyInCart] = useState(0);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
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
      const productInfo = products.caddy[Number(idx)];
      return <Cart_List {...productInfo} key={key}></Cart_List>;
    });
  }

  function getTotalPrice() {
    return products.caddy
      .filter((el: { qty: number }) => el.qty > 0)
      .map((el) => el.qty * el.price)
      .reduce((prev, curr) => prev + curr, 0);
  }

  useEffect(() => {
    setQtyInCart(getTotalProducts());
    setTotalPriceCart(getTotalPrice());
  }, [products]);

  return (
    <div className={S.modal}>
      <section className="wrapper_layout">
        <div className="wrapper_inside relative">
          <div
            className={S.cart}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <header className={S.header_top}>
              <p className="bold">
                CART {"("}
                {qtyInCart}
                {")"}
              </p>
              <button
                className="text_dark__smooth"
                onClick={(event) => {
                  emptyCaddy(event);
                }}
              >
                Remove all
              </button>
            </header>
            <div className={S.cart_list__container}>{cart_listing()}</div>
            <footer>
              <div className={S.total_price}>
                <p>TOTAL</p>
                <p className="bold">${totalPriceCart}</p>
              </div>
              <NavLink
                to="/checkout"
                className="btn btn_primary full_width flex"
                onClick={() => {
                  callback.openModal();
                }}
              >
                checkout
              </NavLink>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
