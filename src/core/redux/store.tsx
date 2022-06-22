import { caddySlice } from "./slice/caddySlice";
import { configureStore } from "@reduxjs/toolkit";
import { productMiddleWare } from "./middleware/productMiddleWare";

export const store = configureStore({
  reducer: {
    caddy: caddySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productMiddleWare),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
