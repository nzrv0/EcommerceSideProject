import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchProdcuts } from "@/lib/actions/product.actions";
import { Button } from "./ui/button";
import ItemDetailedCard from "./itemDetailedCard";
async function OurProducts() {
    const data = await fetchProdcuts();
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-5">
                <div className="flex items-center gap-4">
                    <span className="w-5 h-10 bg-secondary2 rounded-sm" />
                    <h1 className="text-xl font-semibold text-secondary2">
                        Our Products
                    </h1>
                </div>
                <p className="text-5xl font-semibold text-text2">
                    Explore Our Products
                </p>
            </div>

            <Carousel className="w-full gap-8 relative select-none">
                <CarouselContent className="-ml-1">
                    {data.map((item) => (
                        <div
                            className="flex flex-col items-start gap-16"
                            key={item._id}
                        >
                            <CarouselItem
                                key={item._id}
                                className="mr-8 md:basis-1/2 lg:basis-1/4"
                            >
                                <ItemDetailedCard
                                    isNew
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                    rating={item.rating}
                                    review={item.reviews}
                                />
                            </CarouselItem>
                            <CarouselItem
                                key={item._id}
                                className="mr-8 md:basis-1/2 lg:basis-1/4"
                            >
                                <ItemDetailedCard
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                    rating={item.rating}
                                    review={item.reviews}
                                    colors={item.colours}
                                />
                            </CarouselItem>
                        </div>
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

export default OurProducts;
