import { createSlice, current } from "@reduxjs/toolkit";

interface InitialState {
    wishList: ProductInterface[];
}

const initialState: InitialState = {
    wishList: [],
};

export const wishListSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addWish: (state, action) => {
            const { id } = action.payload;
            let tempProducts = state.wishList;
            const exists = tempProducts?.find((item) => item.id === id) || [];
            if (exists.length === 0) {
                tempProducts.push(action.payload);
            } else {
                tempProducts = JSON.parse(
                    JSON.stringify(
                        tempProducts.filter((item) => item.id !== id)
                    )
                );
            }
            state.wishList = tempProducts;

            if (typeof window !== "undefined") {
                window.localStorage.setItem(
                    "wish",
                    JSON.stringify(state.wishList ? state.wishList : "")
                );
            }
        },
    },
});
export const { addWish } = wishListSlice.actions;
export default wishListSlice.reducer;
