"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import {
  increaseProductItem,
  decreaseProductItem,
  setCard,
} from "@/lib/features/cartSlice";
import useUserData from "@/lib/hooks/useUserData";
import handleAddCart from "./action";

const CardTitles = ["Product", "Price", "Quantity", "Subtotal"];

function CartItems() {
  const dispatch = useDispatch<AppDispatch>();
  let data = useSelector<RootState, any>(
    (state) => state.cartSlice.cardProducts,
  );
  let userData = useUserData();
  useEffect(() => {
    dispatch(setCard(userData?.orders));
  }, [userData]);

  function increaseCartItem(id: any) {
    dispatch(increaseProductItem(id));
    handleAddCart(id, 1);
  }
  function decreaseCartItem(id: any) {
    dispatch(decreaseProductItem(id));
    handleAddCart(id, -1);
  }
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between bg-white px-10 py-6 shadow">
        {CardTitles.map((item, key) => (
          <h1 className="text-xl font-normal text-text2" key={key}>
            {item}
          </h1>
        ))}
      </div>
      {data?.map((item: any) => (
        <div
          key={item.order._id}
          className="flex items-center justify-between bg-white px-10 py-6 shadow"
        >
          <div className="flex items-center gap-6">
            <Image
              className="h-auto w-12 select-none object-contain"
              src={`data:image/png;base64,${item.order.image}`}
              alt="image"
              width={100}
              height={100}
            />
            <h2 className="w-10 text-nowrap text-xl font-normal text-text2">
              {item.order.name}
            </h2>
          </div>
          <p className="text-xl font-normal text-text2">${item.order.price}</p>
          <div className="flex items-center justify-between gap-x-4 rounded-sm border border-black border-opacity-40 px-3 py-2">
            {item.quantity}
            <div className="flex flex-col justify-between">
              <Button
                variant="deafult"
                size="default"
                className="p-0"
                onClick={() => increaseCartItem(item.order._id)}
              >
                <MdOutlineKeyboardArrowUp />
              </Button>
              <Button
                variant="deafult"
                size="default"
                className="p-0"
                onClick={() => decreaseCartItem(item.order._id)}
              >
                <MdOutlineKeyboardArrowDown />
              </Button>
            </div>
          </div>
          <p className="text-xl font-normal text-text2">
            $
            {`${Math.floor(item.order.price) * item.quantity}.${Math.floor(item.order.price % 10) * item.quantity}`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
