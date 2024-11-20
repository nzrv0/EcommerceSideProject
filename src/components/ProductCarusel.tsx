"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Iphone from "@/public/iphone.png";

export default function ProductCaruesel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const setColorButton = (index: number) => {
    setCurrent(index);
  };
  return (
    <div className="w-full border-l-2 pl-10 pt-10">
      <div></div>
      {/* <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="h-80 bg-black">
                <CardContent className="mx-16 flex select-none items-center text-white">
                  <div className="flex flex-col gap-5">
                    <div className="z-40 flex items-center gap-6">
                      <FaApple color="white" size={40} />
                      <span className="text-xl font-normal">
                        iPhone 14 Series
                      </span>
                    </div>
                    <div className="leadign-[60px] text-6xl font-semibold tracking-[2px]">
                      Up to 10% off Voucher
                    </div>
                    <Link
                      href="/products"
                      className="w-min border-b-0 font-medium hover:border-b-2"
                    >
                      <Button
                        variant="deafult"
                        className="flex items-center gap-2 p-0 text-white"
                      >
                        Shop Now
                        <IoIosArrowRoundForward size={32} />
                      </Button>
                    </Link>
                  </div>
                  <Image className="" src={Iphone} alt="iphone"></Image>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-3 left-2/4 flex -translate-x-2/4 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              size="default"
              key={index + 1}
              className={cn(
                index + 1 === current
                  ? "border-white bg-button2"
                  : "border-line bg-line",
                "h-full w-full rounded-full border-2 border-solid",
              )}
              onClick={() => setColorButton(index + 1)}
            ></Button>
          ))}
        </div>
      </Carousel> */}
    </div>
  );
}
