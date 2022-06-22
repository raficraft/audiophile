import React, { useRef } from "react";
import {
  clearCaddy,
  MockProduct,
  removeProduct,
  updateQty,
} from "../../../../redux/slice/caddySlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/toolkit";
import S from "./Caddy.module.scss";

export default function Caddy() {
  const products = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const inputRef = useRef(new Array(products.caddy.length));

  function decrement(
    event: React.MouseEvent<HTMLButtonElement>,
    target: HTMLInputElement,
    items: MockProduct
  ) {
    if (target && Number(target.value) > 0) {
      target.value = String(parseInt(target.value) - 1);
      const id = items.id;
      const qty = Number(target.value);
      dispatch(updateQty({ id, qty }));
    }
  }

  function increment(
    event: React.MouseEvent<HTMLButtonElement>,
    target: HTMLInputElement,
    items: MockProduct
  ) {
    if (target && Number(target.value) >= 0) {
      target.value = String(parseInt(target.value) + 1);
      const id = items.id;
      const qty = Number(target.value);
      dispatch(updateQty({ id, qty }));
    }
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

  function handleChange(target: HTMLInputElement, items: MockProduct) {}

  function listProduct() {
    if (products.caddy.length > 0) {
      return products.caddy
        .filter((el: { qty: number }) => el.qty > 0)
        .map((el, key: number) => {
          return (
            <div key={key} className={S.product_control}>
              <div className={S.product_details}>
                <p>{`${el.name.toUpperCase()}`}</p>
                <p>{`${el.price} €`}</p>
              </div>
              <div className={S.bloc_input}>
                <input type="text" hidden defaultValue="product_1" />
                <button
                  type="button"
                  onClick={(event) => {
                    decrement(event, inputRef.current[key], el);
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={el.qty}
                  ref={(el) => (inputRef.current[key] = el)}
                  readOnly
                />
                <button
                  type="button"
                  onClick={(event) => {
                    increment(event, inputRef.current[key], el);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        });
    } else {
      return <li>Aucun produit dans le panier.</li>;
    }
  }

  function removeItem(event: React.MouseEvent<HTMLSpanElement>, id: number) {
    dispatch(removeProduct(id));
  }

  function emptyCaddy(event: React.MouseEvent<HTMLButtonElement>) {
    dispatch(clearCaddy());
  }

  function getTotalPrice() {
    return products.caddy
      .filter((el: { qty: number }) => el.qty > 0)
      .map((el) => el.qty * el.price)
      .reduce((prev, curr) => prev + curr, 0);
  }

  return (
    <section className={S.caddy}>
      <h1>Mon panier {`(${getTotalProducts()})`}</h1>

      <div className={S.product_list}>{listProduct()}</div>

      <div className={S.total}>
        <p>Total TTC</p>
        <p>{getTotalPrice()} €</p>
      </div>
      <div className={S.clear_caddy}>
        <button
          type="button"
          onClick={(event) => {
            emptyCaddy(event);
          }}
        >
          Vider le panier
        </button>
      </div>
    </section>
  );
}
