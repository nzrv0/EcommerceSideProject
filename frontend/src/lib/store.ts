import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
export const store = () => {
    return configureStore({
        reducer: productsSlice,
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
