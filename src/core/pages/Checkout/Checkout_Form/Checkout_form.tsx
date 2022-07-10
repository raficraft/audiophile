import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Input from "../../../Component/Input/Input";
import Input_radio from "../../../Component/Input/Input_radio/Input_radio";
import S from "./Checkout_form.module.scss";

const Checkout_form = forwardRef((props, ref) => {
  const inputRef = {
    name: useRef(),
    email: useRef(),
    phone: useRef(),

    adress: useRef(),
    zip: useRef(),
    city: useRef(),
    country: useRef(),

    money_radio: useRef(),
    cash_radio: useRef(),

    money_number: useRef(),
    pin: useRef(),
  };

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => ({
    get form() {
      return formRef.current;
    },

    get collection() {
      return inputRef;
    },
  }));

  return (
    <form id="checkout_form" className={S.checkout_form} ref={formRef}>
      <h3>Checkout</h3>
      <fieldset>
        <legend className="text_subtitle">Billing Details</legend>

        <div className={S.input_container}>
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Insert Your name"
            cssName="bloc_input__basic"
            ref={inputRef.name}
            pattern="^[A-Za-z]+$"
          />

          <Input
            type="text"
            name="email"
            label="Email Adress"
            placeholder="Insert Your Email"
            cssName="bloc_input__basic"
            ref={inputRef.email}
            pattern="^[A-Za-z]+$"
          />

          <Input
            type="text"
            name="phone"
            label="Phone number"
            placeholder="Insert your phone number"
            cssName="bloc_input__basic"
            ref={inputRef.phone}
            pattern="^[A-Za-z]+$"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend className="text_subtitle">Shipping info</legend>

        <div className={S.input_container}>
          <Input
            type="text"
            name="adress"
            label="Adress"
            placeholder="Insert Your adress"
            ref={inputRef.adress}
            cssName="bloc_input__full"
            pattern="^[A-Za-z]+$"
          />

          <Input
            type="text"
            name="zip"
            label="ZIP Code"
            placeholder="Insert Your Zip code"
            ref={inputRef.zip}
            cssName="bloc_input__basic"
            pattern="^[A-Za-z]+$"
          />
          <Input
            type="text"
            name="city"
            label="City"
            placeholder="Insert your city"
            ref={inputRef.city}
            cssName="bloc_input__basic"
            pattern="^[A-Za-z]+$"
          />

          <Input
            type="text"
            name="country"
            label="Country"
            placeholder="Insert your country"
            ref={inputRef.country}
            cssName="bloc_input__basic"
            pattern="^[A-Za-z]+$"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="text_subtitle">payment details</legend>

        <div className={S.input_container}>
          {/* <Input_radio ref={inputRef.radio} /> */}
          <Input
            type="radio"
            name="emoney"
            groupName="paiement"
            label="e-Money"
            ref={inputRef.money_radio}
            cssName="bloc_input__full"
            pattern="^[A-Za-z]+$"
            checked={true}
          />
          <Input
            type="radio"
            name="cash"
            groupName="paiement"
            label="Cash on Delivery"
            cssName="bloc_input__full"
            ref={inputRef.cash_radio}
            pattern="^[A-Za-z]+$"
          />
          <Input
            type="text"
            name="money_number"
            label="e-Money Number"
            placeholder="Insert your e-money Number"
            cssName="bloc_input__basic"
            ref={inputRef.money_number}
            pattern="^[A-Za-z]+$"
          />
          <Input
            type="text"
            name="city"
            label="e-Money PIN"
            placeholder="Insert you e-money PIN"
            cssName="bloc_input__basic"
            ref={inputRef.pin}
            pattern="^[A-Za-z]+$"
          />
        </div>
      </fieldset>
    </form>
  );
});

export default Checkout_form;
