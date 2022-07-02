import React from "react";

export default function Add_product() {
  return (
    <div className={`flex gap_16`}>
      <div className="input_number">
        <button type="button">+</button>
        <input type="number" defaultValue="1" />
        <button type="button">-</button>
      </div>

      <button type="button" className="btn btn_primary">
        Add to cart
      </button>
    </div>
  );
}
