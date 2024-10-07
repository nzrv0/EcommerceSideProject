import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegHeart, FaHeart, FaRegEye, FaEye } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { cn } from "@/lib/utils";
interface ITEM {
    discount: number | any;
    image: any;
    title: string;
    price: number | any;
    rating: number | any;
    review: string;
}
async function ItemCard({
    discount,
    image,
    title,
    price,
    rating,
    review,
}: ITEM) {
    const watch = true;
    const like = true;
    return (
        <section className="flex flex-col ">
            <Card className="bg-secondary w-72 h-64 group border-none rounded-sm ">
                <CardContent
                    className={cn(
                        "h-full relative grid place-items-center p-0"
                    )}
                >
                    <span className="absolute top-3 left-3 bg-secondary2 text-white py-1 px-3 font-normal text-base rounded-sm">
                        -{discount}%
                    </span>
                    <div className="peer flex flex-col gap-2 absolute top-3 right-3">
                        <Button
                            variant="deafult"
                            size="default"
                            className="justify-center gap-0 p-2 bg-white rounded-full"
                        >
                            {like ? (
                                <FaRegHeart size={16} />
                            ) : (
                                <FaHeart size={16} />
                            )}
                        </Button>
                        <Button
                            variant="deafult"
                            size="default"
                            className="justify-center p-2 bg-white rounded-full"
                        >
                            {watch ? (
                                <FaRegEye size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </Button>
                    </div>
                    <Image
                        className="object-contain min-w-[180px] h-auto select-none"
                        src={`data:image/png;base64,${image}`}
                        alt="image"
                        width={100}
                        height={100}
                        loading="lazy"
                    ></Image>
                    <Button className="absolute bottom-0 left-0 w-full justify-center py-3 rounded-b-lg bg-black text-white hover:bg-black hidden group-hover:flex">
                        Add To Cart
                    </Button>
                </CardContent>
            </Card>
            <div className="pt-4 flex flex-col items-start gap-2">
                <h2 className=" text-xl font-medium text-text2">{title}</h2>
                <p className="text-secondary2 font-medium text-xl">
                    ${price}
                    <span className="pl-3 line-through text-black text-opacity-50">
                        ${price - (price * discount) / 100}
                    </span>
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
                        ({review.length})
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ItemCard;
