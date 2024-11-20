import { createSlice, current } from "@reduxjs/toolkit";

interface WishProductInterface {
  _id: string;
  name: string;
  image?: string;
  description: string;
  price: number;
  rating?: number;
  reviews?: string[];
  category: string;
  inStock?: boolean;
  colours: string[];
  quantity: number;
  discount?: number;
}

interface InitialState {
  wishList: WishProductInterface[] | any;
}

const initialState: InitialState = {
  wishList: [],
};

export const wishListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addWish: (state, action) => {
      console.log(action.payload);
      let tempProducts = state.wishList;
      const { id } = action.payload;
      const exists = state.wishList?.map((item: any) => item._id).includes(id);
      if (!exists) {
        tempProducts.push(action.payload);
      } else {
        tempProducts = tempProducts.filter((item: any) => item._id !== id);
      }
      console.log(current(tempProducts));
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
        window.localStorage.getItem("wish") as string,
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
