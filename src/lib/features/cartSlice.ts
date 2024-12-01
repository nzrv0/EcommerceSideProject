import { createSlice, current } from "@reduxjs/toolkit";

interface CartProductInterface {
  _id: string;
  name: string;
  image?: string;
  price: number;
}

interface InitialState {
  cardProducts: { order: CartProductInterface[]; quantity: number }[] | any;
  subtotal: number;
}

const initialState: InitialState = {
  cardProducts: [
    {
      order: { _id: "", name: "", image: "", price: 0 },
      quantity: 0,
    },
  ],
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { _id } = action.payload;
      const exists = state.cardProducts
        ?.map((item: any) => item.order._id)
        .includes(_id);
      if (!exists) {
        state.cardProducts.push({ order: action.payload, quantity: 1 });
      }
      console.log(current(state.cardProducts));
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "card",
          JSON.stringify(state.cardProducts ? state.cardProducts : ""),
        );
      }
    },

    increaseProductItem: (state, action) => {
      const id = action.payload;

      state.cardProducts.map((item: any) => {
        if (item.order._id === id) {
          item.quantity += 1;
          state.subtotal = item.order.price * item.quantity;
        }
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "card",
          JSON.stringify(state.cardProducts ? state.cardProducts : ""),
        );
      }
    },

    decreaseProductItem: (state, action) => {
      const id = action.payload;
      state.cardProducts.map((item: any) => {
        if (item.order._id === id && state.subtotal !== 0) {
          item.quantity -= 1;
          state.subtotal = state.subtotal - item.order.price;
        }
        if (item.quantity === 0) {
          state.cardProducts = state.cardProducts.filter(
            (item: any) => item.order._id !== id,
          );
        }
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "card",
          JSON.stringify(state.cardProducts ? state.cardProducts : ""),
        );
      }
    },
    setCard: (state, action) => {
      const user_wishes = action.payload;
      const data: ProductInterface[] = JSON.parse(
        window.localStorage.getItem("card") as string,
      );
      if (user_wishes) {
        state.cardProducts = user_wishes;
      } else {
        state.cardProducts = data || [];
      }

      state.cardProducts?.map((item: any) => {
        state.subtotal += item.order.price * item.quantity;
      });
    },
  },
});
export const { addCard, increaseProductItem, decreaseProductItem, setCard } =
  cartSlice.actions;
export default cartSlice.reducer;
