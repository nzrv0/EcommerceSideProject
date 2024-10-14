"use client";
import React, { useState, useEffect } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import John from "@/public/John.png";
import Emma from "@/public/emma.png";
import Will from "@/public/will.png";

const persons = [
    {
        Name: "Tom Cruise",
        Responsibility: "Founder & Chairman",
        Image: John,
        Socials: [
            {
                Account: "Twitter",
                URL: "https://twitter.com",
                Icon: <RiTwitterLine size={18} />,
            },
            {
                Account: "Instagram",
                URL: "https://instagram.com",
                Icon: <RiInstagramLine size={18} />,
            },
            {
                Account: "LinkedIn",
                URL: "https://linkedin.com",
                Icon: <RiLinkedinLine size={18} />,
            },
        ],
    },
    {
        Name: "Emma Watson",
        Responsibility: "Managing Director",
        Image: Emma,

        Socials: [
            {
                Account: "Twitter",
                URL: "https://twitter.com",
                Icon: <RiTwitterLine size={18} />,
            },
            {
                Account: "Instagram",
                URL: "https://instagram.com",
                Icon: <RiInstagramLine size={18} />,
            },
            {
                Account: "LinkedIn",
                URL: "https://linkedin.com",
                Icon: <RiLinkedinLine size={18} />,
            },
        ],
    },
    {
        Name: "Will Smith",
        Responsibility: "Product Designer",
        Image: Will,
        Socials: [
            {
                Account: "Twitter",
                URL: "https://twitter.com",
                Icon: <RiTwitterLine size={18} />,
            },
            {
                Account: "Instagram",
                URL: "https://instagram.com",
                Icon: <RiInstagramLine size={18} />,
            },
            {
                Account: "LinkedIn",
                URL: "https://linkedin.com",
                Icon: <RiLinkedinLine size={18} />,
            },
        ],
    },
];
function PersonalsCarusel() {
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
        <div className="w-full mb-[200px] ">
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {persons.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-[370px] h-[430px] bg-secondary flex items-end justify-center">
                                    <Image
                                        src={item.Image}
                                        alt="persons image"
                                        className="object-contain"
                                    />
                                </div>
                                <h1 className="text-4xl font-medium">
                                    {item.Name}
                                </h1>
                                <p className="text-xl font-normal">
                                    {item.Responsibility}
                                </p>
                                <div className="flex items-center gap-4">
                                    {item.Socials.map((item) => (
                                        <Link
                                            href={item.URL}
                                            key={item.Account}
                                        >
                                            {item.Icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex gap-2 absolute left-2/4 -translate-x-2/4 -bottom-10 ">
                    {Array.from({ length: count }).map((_, index) => (
                        <Button
                            size="default"
                            key={index + 1}
                            className={cn(
                                index + 1 === current
                                    ? " border-line bg-button2 "
                                    : "bg-line ",
                                "rounded-full w-full h-full border-solid border"
                            )}
                            onClick={() => setColorButton(index + 1)}
                        ></Button>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}

export default PersonalsCarusel;
