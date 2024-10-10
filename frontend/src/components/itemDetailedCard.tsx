"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { addWish } from "@/lib/features/whisListSlice";
import { addCard } from "@/lib/features/cartSlice";
function ItemDetailedCard(props: any) {
    const dispatch = useDispatch<AppDispatch>();
    const [like, setLike] = useState(false);
    const [card, setCard] = useState(false);

    const { id, image, title, price, rating, review, isNew, colors } = props;
    function handleLike() {
        dispatch(addWish(props));
        setLike(!like);
    }
    function handleCard() {
        dispatch(addCard(props));
        setCard(!card);
    }
    return (
        <section className="flex flex-col ">
            <Card className="bg-secondary w-72 h-64 group border-none rounded-sm ">
                <CardContent
                    className={cn(
                        "h-full relative grid place-items-center p-0"
                    )}
                >
                    <span
                        className={`${
                            isNew ? `inline-block` : "hidden"
                        } absolute top-3 left-3 bg-button1 text-white py-1 px-3 font-normal text-base rounded-sm`}
                    >
                        NEW
                    </span>
                    <div className="peer flex flex-col gap-2 absolute top-3 right-3">
                        <Button
                            variant="deafult"
                            size="default"
                            className="justify-center gap-0 p-2 bg-white rounded-full"
                            onClick={handleLike}
                        >
                            {!like ? (
                                <FaRegHeart size={16} />
                            ) : (
                                <FaHeart size={16} />
                            )}
                        </Button>
                    </div>
                    <Image
                        className="object-contain min-w-[180px] h-auto select-none"
                        src={`data:image/png;base64,${image}`}
                        alt="image"
                        width={100}
                        height={100}
                    ></Image>
                    <Button
                        className="absolute bottom-0 left-0 w-full justify-center py-3 rounded-b-lg bg-black text-white hover:bg-black hidden group-hover:flex"
                        onClick={handleCard}
                        disabled={card}
                    >
                        Add To Cart
                    </Button>
                </CardContent>
            </Card>
            <div className="pt-4 flex flex-col items-start gap-2">
                <h2 className=" text-xl font-medium text-text2">{title}</h2>
                <div className="flex items-center gap-2">
                    <p className="text-secondary2 font-medium text-xl">
                        ${price}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {rating % 2 !== 0 &&
                                Array.from({ length: rating }).map((_, key) => (
                                    <GoStarFill
                                        key={key}
                                        size={20}
                                        color="#FFAD33"
                                    />
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
                        <span className="text-sm font-semibold text-text1">
                            ({review?.length})
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {colors?.map((item: string, key: number) => (
                        <Button
                            key={key}
                            size="default"
                            variant="deafult"
                            className={cn(
                                `bg-${item}`,
                                `border-2 border-white outline-2 outline-black  outline border-solid min-w-1 h-1 rounded-full`
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ItemDetailedCard;
