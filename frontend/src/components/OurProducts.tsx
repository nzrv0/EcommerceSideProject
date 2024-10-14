"use client";
import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import useProdcutsByCategory from "@/lib/hooks/useProductsByCategory";
import SingleProduct from "./shared/SingleProduct";
function OurProducts() {
  const data = useProdcutsByCategory("Electronics");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-4">
          <span className="h-10 w-5 rounded-sm bg-secondary2" />
          <h1 className="text-xl font-semibold text-secondary2">
            Our Products
          </h1>
        </div>
        <p className="text-5xl font-semibold text-text2">
          Explore Our Products
        </p>
      </div>

      <Carousel className="relative w-full select-none gap-8">
        <CarouselContent className="-ml-1">
          {data.map((item) => (
            <div className="flex flex-col items-start gap-16" key={item._id}>
              <CarouselItem
                key={item._id}
                className="mr-8 md:basis-1/2 lg:basis-1/4"
              >
                <SingleProduct
                  id={item._id}
                  image={item.image}
                  title={item.name}
                  price={item.price}
                  rating={item.rating}
                  review={item.reviews}
                  discount={item.discount}
                />
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button className="mt-14 self-center text-white">
        <Link href="/products">View All Products</Link>
      </Button>
    </section>
  );
}

export default OurProducts;
