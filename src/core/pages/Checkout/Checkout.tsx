import React, { useRef, useEffect } from "react";
import Cart from "../../Component/Cart/Cart";
import { validity_input } from "../../Component/Input/validity_input";
import S from "./Checkout.module.scss";
import Checkout_form from "./Checkout_Form/Checkout_form";

export default function Checkout() {
  const formRef = React.createRef<any>();

  function handleSubmit() {
    const formItem = formRef.current.collection;
    console.log("collection", formItem);
    const keys = Object.keys(formItem);
    let countError = keys.length;
    console.log(countError);

    for (const iterator of keys) {
      const inputEl = formItem[iterator].current.input;
      const error = formItem[iterator].current.error;

      error.textContent = validity_input(inputEl);
      countError = error.textContent === "" ? countError - 1 : countError;
    }

    console.log("yolo", countError);

    // let checkError = true;

    // for (const iterator of keys) {
    //   const element = formItem[iterator].current;
    //   let checkError = false;
    //   if (element.error) {
    //     if (element.error.textContent) {
    //       checkError = true;
    //     }
    //   }
    // }

    // if (checkError) {
    //   console.log("payement");
    // }
  }

  useEffect(() => {}, []);
  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside flexCenter">
        <div className={S.checkout}>
          <Checkout_form ref={formRef} />
          <aside>
            <Cart
              itemsType="summary"
              submit={() => {
                handleSubmit();
              }}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
