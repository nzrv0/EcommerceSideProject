"use client";
import React, { useState } from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
function CartTotal() {
  const cardProducts = useSelector<RootState, any>(
    (state) => state.cartSlice.cardProducts,
  );
  const total_price = cardProducts?.reduce(
    (total: any, item: any) => total + item.subtotal,
    0,
  );
  console.log(total_price);
  return (
    <Card className="w-[470px]">
      <CardHeader>
        <CardTitle className="text-2xl font-medium text-text2">
          Card Total
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-text2">Subtotal</h1>
          <p className="text-xl font-normal text-text2">${total_price}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-text2">Shipping</h1>
          <p className="text-xl font-normal text-text2">Free</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-text2">Total</h1>
          <p className="text-xl font-normal text-text2">${total_price}</p>
        </div>
        <Button variant="primary" size="primary" className="text-white">
          <Link href="/pay">Procees to checkout</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartTotal;
