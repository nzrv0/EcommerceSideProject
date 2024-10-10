"use client";
import React from "react";
import Image from "next/image";
import {
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Button } from "./ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import {
    increaseProductItem,
    decreaseProductItem,
} from "@/lib/features/cartSlice";
const CardTitles = ["Product", "Price", "Quantity", "Subtotal"];
function CardItems() {
    const dispatch = useDispatch<AppDispatch>();
    let data = useSelector<RootState>((state) => state.cartSlice.cardProducts);
    if (data?.length === 0 && typeof window !== "undefined") {
        data = JSON.parse(window.localStorage.getItem("card"));
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between px-10 py-6 bg-white shadow">
                {CardTitles.map((item, key) => (
                    <h1 className="text-xl font-normal text-text2" key={key}>
                        {item}
                    </h1>
                ))}
            </div>
            {data?.map((item: any) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between px-10 py-6 bg-white shadow"
                >
                    <div className="flex items-center gap-6">
                        <Image
                            className="object-contain select-none w-12 h-auto"
                            src={`data:image/png;base64,${item.image}`}
                            alt="image"
                            width={100}
                            height={100}
                        />
                        <h2 className="text-xl font-normal text-text2">
                            {item.name}
                        </h2>
                    </div>
                    <p className="text-xl font-normal text-text2 ">
                        ${item.price}
                    </p>
                    <div className="px-3 py-2 border-black border-opacity-40 border rounded-sm flex items-center justify-between gap-x-4">
                        1
                        <div className="flex flex-col justify-between ">
                            <Button
                                variant="deafult"
                                size="default"
                                className="p-0"
                                onClick={() =>
                                    dispatch(decreaseProductItem(item.id))
                                }
                            >
                                <MdOutlineKeyboardArrowUp />
                            </Button>
                            <Button
                                variant="deafult"
                                size="default"
                                className="p-0"
                                onClick={() => {}}
                            >
                                <MdOutlineKeyboardArrowDown />
                            </Button>
                        </div>
                    </div>
                    <p className="text-xl font-normal text-text2">
                        ${item.price}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CardItems;
