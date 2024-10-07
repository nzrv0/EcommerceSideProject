import { combineSlices, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import usersSlice from "./features/usersSlice";

export const rootReducer = combineSlices({
    productsSlice,
    usersSlice,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
