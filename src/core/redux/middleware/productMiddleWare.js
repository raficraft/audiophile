import { removeProduct, addQty, addProduct } from "../slice/caddySlice";

export const productMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case "caddy/addProduct":
      const { id, qty } = action.payload;
      if (qty <= 20) {
        const currentState = store.getState().caddy;

        //Check if product exist in global Store
        const isExist = currentState.find((el) => el.id === id);
        if (!isExist && qty > 0) {
          next(addProduct(action.payload));
          break;
        }

        if (qty > 0) {
          next(addQty({ id, qty }));
        } else {
          next(removeProduct(id));
        }
      } else {
        next(action);
      }
      break;

    default:
      next(action);
      break;
  }
};
