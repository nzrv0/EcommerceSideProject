import { combineSlices, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import usersSlice from "./features/usersSlice";
import categorySlice from "./features/categorySlice";
import filterSlice from "./features/filterSlice";
import wishListSlice from "./features/whisListSlice";
import cartSlice from "./features/cartSlice";
export const rootReducer = combineSlices({
    productsSlice,
    usersSlice,
    categorySlice,
    filterSlice,
    wishListSlice,
    cartSlice,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
