"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchUser } from "../features/usersSlice";
import Cookies from "js-cookie";
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword: string;
  orders: { order: ProductInterface[]; quantity: number };
  whishlist: ProductInterface[] | null;
  canceled: ProductInterface[];
  return: ProductInterface[];
  purched: ProductInterface[];
  address: string;
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
    if (token) {
      dispatch(fetchUser());
    }
  }, [token, dispatch]);
  return user as User;
}
