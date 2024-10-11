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
            const data = JSON.parse(window.localStorage.getItem("wish"));
            let tempProducts = data;
            const { id } = action.payload;
            const exists = tempProducts?.find((item) => item.id === id) || [];
            if (exists.length === 0) {
                tempProducts.push(action.payload);
            } else {
                tempProducts = tempProducts.filter((item) => item.id !== id);
            }
            state.wishList = tempProducts;
            if (typeof window !== "undefined") {
                window.localStorage.setItem(
                    "wish",
                    JSON.stringify(tempProducts ? tempProducts : "")
                );
            }
        },

        setWishList: (state) => {
            const data = JSON.parse(window.localStorage.getItem("wish"));
            state.wishList = data;
        },
    },
});
export const { addWish, removeWish, setWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
