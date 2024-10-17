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
      let tempProducts = state.wishList;
      const { id } = action.payload;
      const exists = state.wishList?.map((item) => item.id).includes(id);
      if (!exists) {
        tempProducts.push(action.payload);
      } else {
        tempProducts = tempProducts.filter((item: any) => item.id !== id);
      }
      state.wishList = tempProducts;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "wish",
          JSON.stringify(state.wishList ? state.wishList : ""),
        );
      }
    },

    setWishList: (state, action) => {
      const user_wish = action.payload;
      const data: ProductInterface[] = JSON.parse(
        window.localStorage.getItem("card") as string,
      );
      if (user_wish) {
        state.wishList = user_wish;
      } else {
        state.wishList = data;
      }
    },
  },
});
export const { addWish, setWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
