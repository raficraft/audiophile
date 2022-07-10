import React, { useRef, useEffect, useState } from "react";
import Cart from "../../Component/Cart/Cart";
import { validity_input } from "../../Component/Input/validity_input";
import Modal from "../../Component/Modal/Modal";
import S from "./Checkout.module.scss";
import Checkout_form from "./Checkout_Form/Checkout_form";

export default function Checkout() {
  const formRef = React.createRef<any>();
  const [validPaiement, setValidPaiment] = useState(false);

  function handleSubmit() {
    const formItem = formRef.current.collection;
    const keys = Object.keys(formItem);
    let countError = keys.length;

    for (const iterator of keys) {
      // console.log(iterator);
      // console.log(formItem[iterator].current);
      if (formItem[iterator].current !== null) {
        console.log("!!!!");
        const inputEl = formItem[iterator].current.input;
        const error = formItem[iterator].current.error;

        error.textContent = validity_input(inputEl);
        countError = error.textContent === "" ? countError - 1 : countError;
      } else {
        countError = countError - 1;
      }
    }

    if (countError === 0) {
      setValidPaiment(true);
    }
  }

  useEffect(() => {}, []);
  return (
    <>
      <section className="wrapper_layout">
        <div className="wrapper_inside flexCenter">
          <div className={S.checkout}>
            <Checkout_form ref={formRef} />
            <aside className={S.aside}>
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
      {validPaiement && (
        <Modal>
          <h1>Paiement valider</h1>
        </Modal>
      )}
    </>
  );
}
