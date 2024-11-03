import { createSlice, current } from "@reduxjs/toolkit";

interface ProductInterface {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  subtotal: number;
}

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
      const exists = state.cardProducts?.map((item) => item.id).includes(id);
      if (!exists) {
        state.cardProducts.push(action.payload);
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "card",
          JSON.stringify(state.cardProducts ? state.cardProducts : ""),
        );
      }
    },

    increaseProductItem: (state, action) => {
      const id = action.payload;

      state.cardProducts.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
          item.subtotal = item.price * item.quantity;
        }
      });
    },

    decreaseProductItem: (state, action) => {
      const id = action.payload;
      state.cardProducts.map((item) => {
        if (item.id === id && item.subtotal !== 0) {
          item.quantity -= 1;
          item.subtotal = item.subtotal - item.price;
        }
        if (item.quantity === 0) {
          state.cardProducts = state.cardProducts.filter(
            (item) => item.id !== id,
          );
        }
      });
    },
    setCard: (state, action) => {
      const user_wishes = action.payload;
      const data: ProductInterface[] = JSON.parse(
        window.localStorage.getItem("card") as string,
      );
      if (user_wishes) {
        state.cardProducts = user_wishes;
      } else {
        state.cardProducts = data;
      }
      state.cardProducts.map((item) => {
        item.quantity = 1;
        item.subtotal = item.price;
      });
    },
  },
});
export const { addCard, increaseProductItem, decreaseProductItem, setCard } =
  cartSlice.actions;
export default cartSlice.reducer;
