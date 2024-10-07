"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Iphone from "@/public/iphone.png";

import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export function ProductCaruesel() {
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
        <div className="w-full pt-10 pl-10 border-l-2">
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="h-80 bg-black">
                                <CardContent className="flex text-white items-center mx-16 select-none">
                                    <div className="flex flex-col gap-5">
                                        <span className="z-40 flex items-center gap-6">
                                            <FaApple color="white" size={40} />
                                            <h1 className="text-xl font-normal">
                                                iPhone 14 Series
                                            </h1>
                                        </span>
                                        <h2 className="text-6xl font-semibold leadign-[60px] tracking-[2px]">
                                            Up to 10% off Voucher
                                        </h2>
                                        <Button
                                            variant="deafult"
                                            className="text-white p-0 flex items-center gap-2"
                                        >
                                            <Link
                                                href="shopnow"
                                                className="font-medium border-b-0 hover:border-b-2"
                                            >
                                                Shop Now
                                            </Link>
                                            <IoIosArrowRoundForward size={32} />
                                        </Button>
                                    </div>
                                    <Image
                                        className=""
                                        src={Iphone}
                                        alt="iphone"
                                    ></Image>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex gap-2 absolute left-2/4 -translate-x-2/4 bottom-3 ">
                    {Array.from({ length: count }).map((_, index) => (
                        <Button
                            size="default"
                            key={index + 1}
                            className={cn(
                                index + 1 === current
                                    ? " border-white bg-button2 "
                                    : "bg-line border-line",
                                "rounded-full w-full h-full border-solid border-2"
                            )}
                            onClick={() => setColorButton(index + 1)}
                        ></Button>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
