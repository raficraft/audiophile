import React from "react";
import S from "./Card_features.module.scss";

export default function Card_features({
  features,
  inTheBox,
}: {
  features: string;
  inTheBox: any;
}) {
  function makeFeatureList() {
    return inTheBox.map(
      (el: { item: string; quantity: number }, key: string) => {
        return (
          <li key={key}>
            <p className="text text_orange bold">{el.quantity}X</p>
            <p className="text_dark__smooth bold">{el.item}</p>
          </li>
        );
      }
    );
  }
  return (
    <div className={S.features_card}>
      <div className={S.bloc_text}>
        <header>
          <h3>Features</h3>
        </header>
        <p
          className="text_dark__smooth"
          dangerouslySetInnerHTML={{ __html: features }}
        ></p>
      </div>
      <div className={S.list_features}>
        <h3>IN THE BOX</h3>
        <ul>{makeFeatureList()}</ul>
      </div>
    </div>
  );
}
