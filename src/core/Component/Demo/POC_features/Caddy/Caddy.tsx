import React, { useRef, SVGProps } from "react";
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

  function deleteProduct(event: React.MouseEvent<HTMLDivElement>, id: number) {
    dispatch(removeProduct(id));
  }

  function listProduct() {
    if (products.caddy.length > 0) {
      return products.caddy
        .filter((el: { qty: number }) => el.qty > 0)
        .map((el, key: number) => {
          console.log(el);
          return (
            <div key={key} className={S.product_control}>
              {/* <div
                className={S.SVG_container}
                onClick={(event) => {
                  deleteProduct(event, el.id);
                }}
              >
                <TrashIcon></TrashIcon>
              </div> */}
              {el.img.scr && (
                <div className={S.img_container}>
                  <img
                    src={el.img.src}
                    width={el.img.x}
                    height={el.img.y}
                  ></img>
                </div>
              )}
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

//Just for POC trash icon

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      {...props}
    >
      <title>Trash Icon</title>
      <path
        fill="currentColor"
        d="M10.875 0a1 1 0 0 0-.594.281L5.562 5H3c-.551 0-1 .449-1 1v2c0 .551.449 1 1 1h.25l2.281 13.719a.998.998 0 0 0 0 .062c.163.788.469 1.541 1.032 2.157A3.258 3.258 0 0 0 8.938 26h8.124a3.26 3.26 0 0 0 2.375-1.031c.571-.615.883-1.405 1.032-2.219a.998.998 0 0 0 0-.031L22.78 9H23c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1h-1.563l-2.812-3.5a.813.813 0 0 0-.719-.313a.813.813 0 0 0-.343.125L14.688 3.25L11.717.281A1 1 0 0 0 10.876 0zM11 2.438L13.563 5H8.436L11 2.437zm6.844.656L19.375 5h-2.938l-.593-.594l2-1.312zM5.25 9h.688l1.187 1.188l-1.438 1.406L5.25 9zm2.094 0h.937l-.469.469L7.345 9zm2.312 0h1.688l.906.906l-2 2l-1.75-1.75L9.656 9zm3.125 0h.344l-.156.188L12.78 9zm1.781 0h1.688l1.156 1.156l-1.75 1.75l-2-2.031l.906-.875zm3.063 0h.938l-.47.469L17.626 9zm2.344 0h.812l-.437 2.688l-1.532-1.532L19.97 9zm-7.032 1.594l2.032 2l-2.031 2l-2-2l2-2zm-5.124.281l1.718 1.719l-2 2l-1.625-1.625l-.031-.156l1.938-1.938zm10.28 0l2 2l-1.718 1.75l-2-2.031l1.719-1.719zm-7.843 2.438l2 2l-2 2l-2-2l2-2zm5.406 0l2.031 2l-2 2l-2.03-2l2-2zm4.188 1.25l-.219 1.312l-.563-.563l.782-.75zm-13.657.093l.657.656l-.469.47l-.188-1.126zM7.532 16l2 2l-2 2.031l-.562-.562l-.407-2.5l.97-.969zm5.407 0l2.03 2.031l-2 2L10.939 18l2-2zm5.437 0l1.063 1.063l-.407 2.28l-.656.657l-2-2l2-2zm-8.125 2.719l2 2l-2 2.031l-2-2l2-2.031zm5.406 0l2 2l-2 2l-2-2l2-2zm-8.094 2.718l2 2L9 24h-.063c-.391 0-.621-.13-.874-.406a2.645 2.645 0 0 1-.594-1.188v-.031l-.125-.75l.218-.188zm5.407 0l2 2l-.563.563H11.5l-.563-.563l2.032-2zm5.406 0l.281.282l-.125.656c-.002.01.002.02 0 .031c-.095.49-.316.922-.562 1.188c-.252.27-.509.406-.907.406h-.125l-.562-.563l2-2z"
      ></path>
    </svg>
  );
}
