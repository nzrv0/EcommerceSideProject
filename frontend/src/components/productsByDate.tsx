"use client";
import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "./itemCard";
import { Button } from "./ui/button";
import useProdcutsByCategory from "@/lib/hooks/useProductsByCategory";

const date = new Date();
interface PRODUCT {
    Title: string | null;
    SubTitle?: string | null;
    Counter?: any | null;
}
function ProductsByDate({ Title, SubTitle, Counter }: PRODUCT) {
    const data = useProdcutsByCategory("Electronics");

    return (
        <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <span className="w-5 h-10 bg-secondary2 rounded-sm" />
                <h1 className="text-xl font-semibold text-secondary2">
                    {Title}
                </h1>
            </div>
            <div className="flex items-end gap-24 ">
                <p className="text-5xl font-semibold text-text2">{SubTitle}</p>
                <div
                    className={`${
                        Counter ? `flex` : `hidden`
                    } items-center gap-4 text-hoverButton text-2xl font-bold`}
                >
                    <span className="text-base font-medium text-text2 flex flex-col items-start">
                        Days
                        <span className="text-4xl font-bold">
                            {date.getDay()}
                        </span>
                    </span>
                    :
                    <span className="text-base font-medium text-text2 flex flex-col items-start">
                        Hours
                        <span className="text-4xl font-bold">
                            {date.getHours()}
                        </span>
                    </span>
                    :
                    <span className="text-base font-medium text-text2 flex flex-col items-start">
                        Minutes
                        <span className="text-4xl font-bold">
                            {date.getMinutes()}
                        </span>
                    </span>
                    :
                    <span className="text-base font-medium text-text2 flex flex-col items-start">
                        Seconds
                        <span className="text-4xl font-bold">
                            {date.getSeconds()}
                        </span>
                    </span>
                </div>
            </div>
            <Carousel className="w-full gap-8 relative select-none">
                <CarouselContent className="-ml-1">
                    {data.map((item) => (
                        <CarouselItem
                            key={item._id}
                            className="mr-8 md:basis-1/2 lg:basis-1/4"
                        >
                            <ItemCard
                                discount={item.discount}
                                image={item.image}
                                title={item.name}
                                price={item.price}
                                rating={item.rating}
                                review={item.reviews}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Button className="text-white self-center mt-14">
                View All Products
            </Button>
        </section>
    );
}

export default ProductsByDate;
