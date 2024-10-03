import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { fetchCategory } from "@/lib/actions/category.actions";
import { CiMicrochip } from "react-icons/ci";
import { PiTShirtLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";

import { LuToyBrick } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";

async function CategoriesCorusel() {
    const data = await fetchCategory();
    return (
        <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <span className="w-5 h-10 bg-secondary2 rounded-sm" />
                <h1 className="text-xl font-semibold text-secondary2">
                    Categories
                </h1>
            </div>
            <div className="flex items-end gap-24 ">
                <h2 className="text-5xl font-semibold text-text2">
                    Browse By Category
                </h2>
            </div>
            <Carousel className="w-full gap-8 relative select-none">
                <CarouselContent className="-ml-1 ">
                    <CarouselItem className="mr-8 md:basis-1/2 lg:basis-1/6">
                        <div className="group hover:bg-secondary2 px-10 py-6 flex flex-col gap-4 items-center border-solid border-2 border-black border-opacity-30 rounded-sm">
                            <CiMicrochip
                                size={56}
                                className="group-hover:text-white text-black"
                            />
                            <h3 className="text-text2 font-normal text-xl group-hover:text-white">
                                {data[0].name}
                            </h3>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="mr-8 md:basis-1/2 lg:basis-1/6">
                        <div className="group hover:bg-secondary2 px-10 py-6 flex flex-col gap-4 items-center border-solid border-2 border-black border-opacity-30 rounded-sm">
                            <PiTShirtLight
                                size={56}
                                className="group-hover:text-white text-black"
                            />
                            <h3 className="text-text2 font-normal text-xl group-hover:text-white">
                                {data[1].name}
                            </h3>
                        </div>
                    </CarouselItem>{" "}
                    <CarouselItem className="mr-8 md:basis-1/2 lg:basis-1/6">
                        <div className="group hover:bg-secondary2 px-10 py-6 flex flex-col gap-4 items-center border-solid border-2 border-black border-opacity-30 rounded-sm">
                            <IoHomeOutline
                                size={56}
                                className="group-hover:text-white text-black"
                            />
                            <h3 className="text-nowrap text-text2 font-normal text-xl group-hover:text-white">
                                {data[2].name}
                            </h3>
                        </div>
                    </CarouselItem>{" "}
                    <CarouselItem className="mr-8 md:basis-1/2 lg:basis-1/6">
                        <div className="group hover:bg-secondary2 px-10 py-6 flex flex-col gap-4 items-center border-solid border-2 border-black border-opacity-30 rounded-sm">
                            <LuToyBrick
                                size={56}
                                className="group-hover:text-white text-black"
                            />
                            <h3 className="text-text2 font-normal text-xl group-hover:text-white">
                                {data[3].name}
                            </h3>
                        </div>
                    </CarouselItem>{" "}
                    <CarouselItem className="mr-8 md:basis-1/2 lg:basis-1/6">
                        <div className="group hover:bg-secondary2 px-10 py-6 flex flex-col gap-4 items-center border-solid border-2 border-black border-opacity-30 rounded-sm">
                            <FiBookOpen
                                size={56}
                                className="group-hover:text-white text-black"
                            />
                            <h3 className="text-text2 font-normal text-xl group-hover:text-white">
                                {data[4].name}
                            </h3>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    );
}

export default CategoriesCorusel;
