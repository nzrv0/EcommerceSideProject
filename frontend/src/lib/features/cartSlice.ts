import { createSlice, current } from "@reduxjs/toolkit";

interface InitialState {
    cardProducts: ProductInterface[];
}

const initialState: InitialState = {
    cardProducts: [],
};

export const cartSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            const exists = state.cardProducts
                ?.map((item) => item.id)
                .includes(id);
            if (!exists) {
                state.cardProducts.push(action.payload);
            }
            if (typeof window !== "undefined") {
                window.localStorage.setItem(
                    "card",
                    JSON.stringify(state.cardProducts ? state.cardProducts : "")
                );
            }
        },
        removeCard: (state, action) => {
            const { id } = action.payload;
            const exists = state.cardProducts
                ?.map((item) => item.id)
                .includes(id);
            if (!exists) {
                state.cardProducts = JSON.parse(
                    JSON.stringify(
                        state.cardProducts.filter((item) => item.id !== id)
                    )
                );
            }
        },
        increaseProductItem: (state, action) => {
            let tempProduct = state.cardProducts.filter(
                (item) => item.id === action.payload
            );
            tempProduct.map((item) => {
                item.quantity += 1;
                item.subTotal += item.quantity;
                return tempProduct;
            });
            state.cardProducts = tempProduct;
        },
        decreaseProductItem: (state, action) => {
            let tempProduct = state.cardProducts.filter(
                (item) => item.id === action.payload
            );
            tempProduct.map((item) => (item.quantity += 1));
        },
    },
});
export const { addCard, removeCard, increaseProductItem, decreaseProductItem } =
    cartSlice.actions;
export default cartSlice.reducer;
