"use client";
import * as React from "react";
import { Button } from "./ui/button";
import ItemDetailedCard from "./itemDetailedCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
function WishListProducts() {
    let data = useSelector<RootState>((state) => state.wishListSlice.wishList);
    if (data.length === 0 && typeof window !== "undefined") {
        data = JSON.parse(window.localStorage.getItem("wish"));
    }
    return (
        <section className="flex flex-col gap-16 mt-20">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-normal text-text2">
                    Wishlist ({data?.length})
                </h1>
                <Button variant="secondary" className="text-black">
                    View All Products
                </Button>
            </div>

            <div className="w-full gap-4 gap-y-6 relative select-none flex items-start ">
                {data?.map((item) => (
                    <ItemDetailedCard
                        key={item._id}
                        isNew
                        id={item._id}
                        image={item.image}
                        title={item.name}
                        price={item.price}
                        rating={item.rating}
                        review={item.reviews}
                    />
                ))}
            </div>
        </section>
    );
}

export default WishListProducts;
