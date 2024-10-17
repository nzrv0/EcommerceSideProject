"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchUser } from "../features/usersSlice";
import Cookies from "js-cookie";
import handleAddWish from "@/components/wishlist/action";
interface User {
  email: string;
  password: string;
  orders: ProductInterface[];
  whishlist: ProductInterface[] | null;
  canceled: ProductInterface[];
  return: ProductInterface[];
  purched: ProductInterface[];
  adress: {
    street: string;
    apartment: string;
    town: string;
  };
  payment: {
    method: string;
  }[];
}
export default function useUserData(): User {
  const cookie = Cookies;

  const token = cookie.get("token");
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector<RootState>((state) => state.usersSlice.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, [token, dispatch]);
  return user as User;
}
