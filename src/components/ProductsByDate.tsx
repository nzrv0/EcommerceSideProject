"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleProduct from "@/components/shared/SingleProduct";
import { Button } from "./ui/button";
import useProdcutsByCategory from "@/lib/hooks/useProductsByCategory";

interface PRODUCT {
  Title: string | null;
  SubTitle?: string | null;
  Counter?: any | null;
}

const date = new Date();

const date_information = [
  {
    name: "Days",
    date: date.getDate(),
  },
  {
    name: "Hours",
    date: date.getHours(),
  },
  {
    name: "Minutes",
    date: date.getMinutes(),
  },
  {
    name: "Seconds",
    date: 12,
  },
];
function ProductsByDate({ Title, SubTitle, Counter }: PRODUCT) {
  const data = useProdcutsByCategory("Electronics");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="h-10 w-5 rounded-sm bg-secondary2" />
        <h1 className="text-xl font-semibold text-secondary2">{Title}</h1>
      </div>
      <div className="flex items-end gap-24">
        <p className="text-5xl font-semibold text-text2">{SubTitle}</p>
        {Counter && (
          <div className="flex items-center gap-4">
            {date_information.map((item, key) => (
              <div key={key} className="flex items-center">
                <span className="flex flex-col items-start text-base font-medium text-text2">
                  {item.name}
                  <span className="text-4xl font-bold">{item.date}</span>
                </span>
                {date_information.length !== key + 1 && (
                  <span className="mx-4 text-2xl font-bold text-hoverButton">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Carousel className="relative w-full select-none gap-8">
        <CarouselContent className="-ml-1">
          {data?.map((item, key) => (
            <CarouselItem key={key} className="mr-8 md:basis-1/2 lg:basis-1/4">
              <SingleProduct
                _id={item._id}
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
      <Button className="mt-14 self-center text-white">
        <Link href="/products">View All Products</Link>
      </Button>
    </section>
  );
}

export default ProductsByDate;
