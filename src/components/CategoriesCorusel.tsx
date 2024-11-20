"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CiMicrochip } from "react-icons/ci";
import { PiTShirtLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";

import { LuToyBrick } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import useCategories from "@/lib/hooks/useCategories";
function CategoriesCorusel() {
  const data = useCategories() || [];
  const categories = [
    {
      Icon: (
        <CiMicrochip size={56} className="text-black group-hover:text-white" />
      ),
      Name: data[0]?.name,
    },
    {
      Icon: (
        <PiTShirtLight
          size={56}
          className="text-black group-hover:text-white"
        />
      ),
      Name: data[1]?.name,
    },
    {
      Icon: (
        <FiBookOpen size={56} className="text-black group-hover:text-white" />
      ),
      Name: data[2]?.name,
    },
    {
      Icon: (
        <LuToyBrick size={56} className="text-black group-hover:text-white" />
      ),
      Name: data[3]?.name,
    },
    {
      Icon: (
        <IoHomeOutline
          size={56}
          className="text-black group-hover:text-white"
        />
      ),
      Name: data[4]?.name,
    },
  ];
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="h-10 w-5 rounded-sm bg-secondary2" />
        <h1 className="text-xl font-semibold text-secondary2">Categories</h1>
      </div>
      <div className="flex items-end gap-24">
        <h2 className="text-5xl font-semibold text-text2">
          Browse By Category
        </h2>
      </div>
      <Carousel className="relative w-full select-none gap-8">
        <CarouselContent className="-ml-1">
          {categories.map((item, key) => (
            <CarouselItem key={key} className="mr-8 md:basis-1/2 lg:basis-1/6">
              <Link
                href={`products?category=${item.Name?.toLowerCase().split(" ").join("")}`}
              >
                <div className="group flex flex-col items-center gap-4 rounded-sm border-2 border-solid border-black border-opacity-30 px-10 py-6 hover:bg-secondary2">
                  {item.Icon}
                  <h3 className="text-nowrap text-xl font-normal text-text2 group-hover:text-white">
                    {item.Name}
                  </h3>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default CategoriesCorusel;
