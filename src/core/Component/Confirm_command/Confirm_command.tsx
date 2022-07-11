import React, { useState } from "react";
import S from "./Confirm_command.module.scss";
import { CheckIcons } from "../../assets/SVG/Icons/Icons";
import Btn from "../button/Btn/Btn";
import { useAppSelector } from "../hooks/toolkit";
import Cart_List from "../Cart/Cart_List/Cart_List";
import { MockProduct } from "../../redux/slice/caddySlice";

export default function Confirm_command() {
  const products = useAppSelector((state) => state);
  const [readFirstProducts, setReadFirstProduct] = useState(false);

  function cart_listing() {
    if (readFirstProducts) {
      const productInfo = products.caddy[0]; //Deep copy || shallow copy ??
      return <Cart_List {...productInfo} itemsType="valid_order"></Cart_List>;
    }

    return Object.keys(products.caddy).map((idx, key) => {
      const productInfo = products.caddy[Number(idx)]; //Deep copy || shallow copy ??
      return (
        <Cart_List
          {...productInfo}
          key={key}
          itemsType="valid_order"
        ></Cart_List>
      );
    });
  }

  function toggleDetails() {
    setReadFirstProduct(!readFirstProducts);
  }

  function makeSticker() {
    const restProductQty = Object.keys(products).length + 1;

    return (
      <div className={S.summary_order}>
        <div className={S.valid_order}>
          {cart_listing()}

          <div className={S.toggle_details}>
            {restProductQty > 1 && (
              <button
                className="btn text_dark__smooth"
                onClick={() => {
                  toggleDetails();
                }}
              >
                {readFirstProducts
                  ? `and ${restProductQty} other item(s)`
                  : `view less`}
              </button>
            )}
          </div>
        </div>
        <div className={S.total_price}>
          <p className="text_grey uppercase">Grand total</p>
          <p className="text_white uppercase bold">$5,446</p>
        </div>
      </div>
    );
  }

  return (
    <section className="wrapper_layout" onClick={(e) => e.stopPropagation()}>
      <div className="wrapper_inside">
        <section className={S.container}>
          <div className={S.content}>
            <header className={S.header_top}>
              <div className={S.svg_container}>
                <CheckIcons />
              </div>
              <h3>Thank you</h3>
              <h3>for your order</h3>
              <p className="text_dark__smooth">
                You will receive an email confirmation shortly.
              </p>
            </header>
            <div>{makeSticker()}</div>

            <footer>
              <Btn
                params={{
                  mode: "link",
                  text: "Back to home",
                  cssName: ["btn_primary", "btn_primary__full"],
                }}
              />
            </footer>
          </div>
        </section>
      </div>
    </section>
  );
}
