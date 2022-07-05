import React, { useRef, useEffect } from "react";
import S from "./Checkout.module.scss";
import Checkout_form from "./Checkout_Form/Checkout_form";

export default function Checkout() {
  const formRef = React.createRef<any>();

  function handleSubmit() {
    // console.log("in page ", formRef);
    // console.log(formRef.current.collection.name.current.input.value);
    // console.log("in page ", formRef.current);
  }

  useEffect(() => {}, []);
  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside flexCenter">
        <div className={S.checkout}>
          <Checkout_form ref={formRef} />
          <aside>
            <h6>SUMMARY</h6>
            <button
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              SEND
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
