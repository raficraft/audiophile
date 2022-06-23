import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MockProduct {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: any;
}

function getLocalStorage() {
  const items = JSON.parse(localStorage.getItem("caddy") || "[]")
    ? JSON.parse(localStorage.getItem("caddy") || "[]")
    : [];

  if (items.caddy) {
    // if (!items.caddy.img) {
    //   return [];
    // }
    return items.caddy;
  } else {
    return [];
  }
}

//   const initalState: MockProduct[] = [getLocalStorage()];

const initalState: MockProduct[] = getLocalStorage();

export const caddySlice = createSlice({
  name: "caddy",
  initialState: initalState,

  reducers: {
    addProduct: (state, action: PayloadAction<MockProduct>) => {
      const newProducts = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        qty: action.payload.qty,
        img: action.payload.img,
      };

      state.push(newProducts);
    },
    removeProduct: (state, action: PayloadAction<string | number>) => {
      const products = state.filter(
        (el: { id: number }) => el.id !== action.payload
      );
      return products;
    },
    addQty: (state, action) => {
      const product = state.find(
        (el: { id: number }) => el.id === action.payload.id
      );
      if (product) {
        product.qty = product.qty + action.payload.qty;
      }
    },
    updateQty: (state, action) => {
      const product = state.find(
        (el: { id: number }) => el.id === action.payload.id
      );
      if (product) {
        product.qty = action.payload.qty;
      }
    },
    clearCaddy: () => {
      return [];
    },
  },
});

export const { addProduct, removeProduct, addQty, updateQty, clearCaddy } =
  caddySlice.actions;
