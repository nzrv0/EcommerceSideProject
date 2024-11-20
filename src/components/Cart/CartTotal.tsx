"use client";
import React, { useState } from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
function CartTotal() {
  const subtotal = useSelector<RootState, any>(
    (state) => state.cartSlice.subtotal,
  );
  const format_subtotal = `${Math.floor(subtotal)}.${Math.floor(subtotal % 100)}`;
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
          <p className="text-xl font-normal text-text2">${format_subtotal}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-text2">Shipping</h1>
          <p className="text-xl font-normal text-text2">Free</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-normal text-text2">Total</h1>
          <p className="text-xl font-normal text-text2">${format_subtotal}</p>
        </div>
        <Link href="/pay">
          <Button variant="primary" size="primary" className="text-white">
            Procees to checkout
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CartTotal;
