import React from "react";

export default function DesignSystem() {
  return (
    <div id="demo">
      <h1>Design System Title H1</h1>
      <h2>Design System Title H2</h2>
      <h3>Design System Title H3</h3>
      <h4>Design System Title H4</h4>
      <h5>Design System Title H5</h5>
      <h6>Design System Title H6</h6>
      <p className="text_overline">
        Sint fugiat officia Lorem ad veniam duis reprehenderit. Overline
      </p>
      <p className="text_subtitle">
        Eiusmod culpa tempor officia aliquip in labore Lorem laboris est laborum
        esse mollit laborum.
      </p>
      <p className="text">
        Nostrud occaecat ut voluptate do laboris velit do duis officia
        reprehenderit cupidatat fugiat do. Do velit dolor exercitation labore
        labore. Ipsum ad ullamco culpa velit voluptate labore dolore culpa
        ullamco deserunt minim anim. Enim tempor incididunt in nulla pariatur
        esse ut quis nostrud reprehenderit amet duis labore.
      </p>
      <button type="button" className="btn btn_primary">
        see product
      </button>
      <button type="button" className="btn btn_secondary">
        see product
      </button>
      <button type="button" className="btn btn_arrow">
        shop
      </button>

      <div className="input_number">
        <button type="button">+</button>
        <input type="number" defaultValue="1" />
        <button type="button">-</button>
      </div>

      <div className="bloc_input">
        <div className="bloc_input__head">
          <label htmlFor="user_name">Name</label>
          <p className="text_error">Wrong format</p>
        </div>
        <input
          type="text"
          id="user_name"
          name="user_name"
          placeholder="Insert your name"
          className="input_text"
        />
      </div>

      <div className="bloc_input__radio">
        <label htmlFor="money">e-Money</label>
        <input type="radio" id="money" name="radio" />
      </div>
    </div>
  );
}
