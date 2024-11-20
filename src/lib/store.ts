import { combineSlices, configureStore } from "@reduxjs/toolkit";
import productsSlice, { productApi } from "./features/productsSlice";
import usersSlice from "./features/usersSlice";
import categorySlice from "./features/categorySlice";
import filterSlice from "./features/filterSlice";
import wishListSlice from "./features/whisListSlice";
import cartSlice from "./features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const rootReducer = combineSlices({
  productsSlice,
  usersSlice,
  categorySlice,
  filterSlice,
  wishListSlice,
  cartSlice,
  [productApi.reducerPath]: productApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
};
setupListeners(store().dispatch);

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
