import React from "react";
import { Button } from "./ui/button";
import { GoStarFill } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface PRODUCT {
    name: string | any;
    description: string | any;
    price: number | any;
    rating: number | any;
    reviews: string | any;
    inStock: boolean | any;
    colours: string[] | any;
}

function ProductDetails({
    name,
    description,
    price,
    rating,
    reviews,
    inStock,
    colours,
}: PRODUCT) {
    return (
        <>
            <h1 className="text-text2 text-3xl font-semibold">{name}</h1>
            <div className="flex items-center  my-4">
                <div className="flex items-center mr-2">
                    {rating % 2 !== 0 &&
                        Array.from({ length: rating }).map((_, key) => (
                            <GoStarFill key={key} size={20} color="#FFAD33" />
                        ))}
                    {Array.from({ length: Math.ceil(5 - rating) }).map(
                        (_, key) => (
                            <GoStarFill
                                key={key}
                                size={20}
                                color="black"
                                opacity="25%"
                            />
                        )
                    )}
                </div>
                <span className="text-sm font-normal text-text1">
                    ({reviews?.length} Reviews)
                </span>
                <div className="w-[1px] h-5 bg-text1 mx-4" />
                {inStock ? (
                    <span className="text-sm font-normal text-button1">
                        In Stock
                    </span>
                ) : (
                    <span className="text-sm font-normal text-secondary2">
                        Not in Stock
                    </span>
                )}
            </div>
            <h2 className="text-text2 font-normal text-3xl">${price}</h2>
            <p className="my-6 text-sm text-text2 font-normal text-wrap">
                {description}
            </p>
            <hr className="w-full text-text1" />
            <div className="flex items-center my-6">
                <span className="text-text2 font-normal text-2xl mr-6">
                    Colours:
                </span>
                {colours?.map((item: string, key: number) => (
                    <Button
                        key={key}
                        size="default"
                        variant="deafult"
                        className={cn(
                            `bg-${item}`,
                            `border-2 border-white outline-2 outline-black  outline border-solid min-w-1 h-1 rounded-full mr-2`
                        )}
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <div className="flex">
                    <Button className="px-3 py-5" variant="secondary">
                        <FiMinus size={20} />
                    </Button>
                    <div className="border-2  border-text2 border-opacity-50 py-2 px-8 text-text2 text-2xl font-medium min-h-full grid place-items-center">
                        2
                    </div>
                    <Button className="px-3 py-5" variant="primary">
                        <FiPlus size={20} color="white" />
                    </Button>
                </div>
                <Button
                    variant="primary"
                    size="secondary"
                    className="text-white"
                >
                    Buy Now
                </Button>
                <Button variant="secondary" className="px-[10px] py-[11px]">
                    <LuHeart size={30} />
                </Button>
            </div>
        </>
    );
}

export default ProductDetails;
