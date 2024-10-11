"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import ItemDetailedCard from "./itemDetailedCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setWishList } from "@/lib/features/whisListSlice";
function WishListProducts() {
    const dispatch = useDispatch<AppDispatch>();
    let data = useSelector<RootState>((state) => state.wishListSlice.wishList);

    console.log(data);
    useEffect(() => {
        dispatch(setWishList());
    }, []);
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
                        key={item.id}
                        isNew
                        id={item.id}
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
