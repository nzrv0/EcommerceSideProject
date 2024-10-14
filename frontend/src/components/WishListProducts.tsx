"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import SingleProduct from "./shared/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setWishList } from "@/lib/features/whisListSlice";
import Link from "next/link";
function WishListProducts() {
  const dispatch = useDispatch<AppDispatch>();
  let data = useSelector<RootState>((state) => state.wishListSlice.wishList);

  useEffect(() => {
    dispatch(setWishList());
  }, []);
  return (
    <section className="mt-20 flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-normal text-text2">
          Wishlist ({data?.length})
        </h1>
        <Button variant="secondary" className="text-black">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>

      <div className="relative flex w-full select-none items-start gap-4 gap-y-6">
        {data?.map((item: any) => (
          <SingleProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            discount={item.discount}
            review={item.reviews}
          />
        ))}
      </div>
    </section>
  );
}

export default WishListProducts;
