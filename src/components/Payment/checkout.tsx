"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import image from "@/public/jbl.png";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import useUserData from "@/lib/hooks/useUserData";
import { setCard } from "@/lib/features/cartSlice";
import handlePaymant from "./hanldePaymant";
import { useRouter } from "next/navigation";
function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  let user_data = useUserData();
  const orders = useSelector<RootState, any>(
    (state) => state.cartSlice.cardProducts,
  );
  const totalPrice = orders?.reduce(
    (total: any, item: any) => total + item.order.price,
    0,
  );
  useEffect(() => {
    dispatch(setCard(user_data?.orders));
  }, [user_data]);
  async function handlePay() {
    orders.forEach((item: any) => {
      handlePaymant(item.order._id, item.quantity);
    });
    router.push("/succeed");
  }
  return (
    <div className="flex w-full flex-col items-start gap-[32px]">
      {orders?.map((item: any, key: any) => (
        <div className="flex w-full items-center" key={key}>
          <Image
            src={`data:image/png;base64,${item.order.image}`}
            alt="image"
            width={50}
            height={50}
            loading="lazy"
          />
          <h2 className="ml-6 text-xl font-normal text-black">
            {item.order.name}
          </h2>
          <p className="ml-auto text-xl font-normal text-black">
            ${item.order.price}
          </p>
        </div>
      ))}
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <h3>Subtotal:</h3>
          <p>{`${Math.floor(totalPrice)}.${Math.floor(totalPrice % 100)}`}</p>
        </div>
        <hr className="h-auto w-full" />
        <div className="flex w-full items-center justify-between">
          <h3>Shipping:</h3>
          <p>Free</p>
        </div>
        <hr className="h-auto w-full" />
        <div className="flex w-full items-center justify-between">
          <h3>Total:</h3>
          <p>{`${Math.floor(totalPrice)}.${Math.floor(totalPrice % 100)}`}</p>
        </div>
      </div>
      <Button
        variant="primary"
        className="self-end text-white"
        onClick={handlePay}
      >
        Place a Order
      </Button>
    </div>
  );
}

export default Checkout;
