"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SingleProduct from "../shared/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setWishList } from "@/lib/features/whisListSlice";
import useUserData from "@/lib/hooks/useUserData";
import Link from "next/link";
import useSingleProduct from "@/lib/hooks/useSingleProduct";
import Cookies from "js-cookie";
import { fetchUser } from "@/lib/features/usersSlice";

function WishListProducts() {
  const cookie = Cookies;
  const dispatch = useDispatch<AppDispatch>();
  let data =
    useSelector<RootState, any>((state) => state.wishListSlice.wishList) || "";
  let user_data = useUserData();

  useEffect(() => {
    dispatch(setWishList(user_data?.whishlist));
  }, [user_data]);
  return (
    <section className="mt-20 flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-normal text-text2">
          Wishlist ({data?.length})
        </h1>
        <Link href="/products">
          <Button variant="secondary" className="text-black">
            View All Products
          </Button>
        </Link>
      </div>

      <div className="relative flex w-full select-none flex-wrap items-start gap-x-1 gap-y-6">
        {data?.map((item: any, key: any) => (
          <div key={key}>
            <SingleProduct
              id={item._id}
              image={item.image}
              title={item.name}
              price={item.price}
              rating={item.rating}
              discount={item.discount}
              review={item.reviews}
              like_state
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WishListProducts;
