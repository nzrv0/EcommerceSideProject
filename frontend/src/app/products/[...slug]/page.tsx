"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/lib/store";
import { fetchProduct } from "@/lib/features/productsSlice";
import { IoIosImages } from "react-icons/io";
import useSingleProduct from "@/lib/hooks/useSingleProduct";
import { GoStarFill } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GrPowerCycle } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TbTruckDelivery } from "react-icons/tb";
import ProductsByDate from "@/components/productsByDate";
import ShowRoute from "@/components/ui/showRoute";

// test
import { fetchProductById } from "@/lib/actions/product.actions";

interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    reviews: {
        type: string;
        ref: string;
    }[];
    category: string;
    inStock: boolean;
    colours: string[];
    quantity: number;
    discount?: number;
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
function ProductPage({ params }: { params: { slug: string } }) {
    // const {
    //     name,
    //     image,
    //     description,
    //     price,
    //     rating,
    //     reviews,
    //     category,
    //     inStock,
    //     colours,
    //     quantity,
    //     discount,
    // } = useSingleProduct(params.slug[0]);

    const dispatch = useDispatch<AppDispatch>();
    const product: Product | unknown = useSelector<RootState>(
        (state) => state.products
    );
    useEffect(() => {
        dispatch(fetchProduct());
    }, [params.slug, dispatch]);

    const {
        name,
        image,
        description,
        price,
        rating,
        reviews,
        category,
        inStock,
        colours,
        quantity,
        discount,
    } = product;
    console.log(product);

    return (
        <div className="container my-20">
            <ShowRoute routes={[category, name]} />
            <div className="w-full flex flex-nowrap items-start mt-20 mb-36">
                <div className="flex flex-col items-start gap-4 mr-8">
                    {Array.from({ length: 4 }).map((_, key) => (
                        <div
                            key={key}
                            className="min-w-[170px] min-h-[138px] py-5 px-7 bg-secondary rounded-sm grid place-items-center"
                        >
                            <IoIosImages size={80} opacity="50%" />
                        </div>
                    ))}
                </div>
                <div className="min-w-[500px] h-[600px] px-7 grid place-items-center bg-secondary rounded-sm">
                    <Image
                        className="object-contain min-w-full h-auto select-none "
                        src={`data:image/png;base64,${image}`}
                        alt="image"
                        width={100}
                        height={100}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col items-start ml-[71px]">
                    <h1 className="text-text2 text-3xl font-semibold">
                        {name}
                    </h1>
                    <div className="flex items-center  my-4">
                        <div className="flex items-center mr-2">
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
                        <span className="text-sm font-normal text-text1">
                            ({reviews?.length} Reviews)
                        </span>
                        <div className="w-[1px] h-5 bg-text1 mx-4" />
                        {inStock ? (
                            <span className="text-sm font-normal text-button1">
                                In Stock
                            </span>
                        ) : (
                            <span className="text-sm font-normal text-secondary2">
                                Not in Stock
                            </span>
                        )}
                    </div>
                    <h2 className="text-text2 font-normal text-3xl">
                        ${price}
                    </h2>
                    <p className="my-6 text-sm text-text2 font-normal text-wrap">
                        {description}
                    </p>
                    <hr className="w-full text-text1" />
                    <div className="flex items-center my-6">
                        <span className="text-text2 font-normal text-2xl mr-6">
                            Colours:
                        </span>
                        {colours?.map((item: string, key: number) => (
                            <Button
                                key={key}
                                size="default"
                                variant="deafult"
                                className={cn(
                                    `bg-${item}`,
                                    `border-2 border-white outline-2 outline-black  outline border-solid min-w-1 h-1 rounded-full mr-2`
                                )}
                            />
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <div className="flex">
                            <Button className="px-3 py-5" variant="secondary">
                                <FiMinus size={20} />
                            </Button>
                            <div className="border-2  border-text2 border-opacity-50 py-2 px-8 text-text2 text-2xl font-medium min-h-full grid place-items-center">
                                2
                            </div>
                            <Button className="px-3 py-5" variant="primary">
                                <FiPlus size={20} color="white" />
                            </Button>
                        </div>
                        <Button
                            variant="primary"
                            size="secondary"
                            className="text-white"
                        >
                            Buy Now
                        </Button>
                        <Button
                            variant="secondary"
                            className="px-[10px] py-[11px]"
                        >
                            <LuHeart size={30} />
                        </Button>
                    </div>
                    <div className="flex flex-col items-start mt-10 w-full">
                        <Card className="w-full flex items-center rounded-none rounded-t-lg">
                            <TbTruckDelivery className="ml-5 text-[32px]" />
                            <CardHeader className="pl-4">
                                <CardTitle className="text-xl font-medium text-text2 ">
                                    Create project
                                </CardTitle>
                                <CardDescription className=" text-base font-medium text-text2 underline">
                                    Deploy your new project in one-click.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="w-full flex items-center rounded-none rounded-b-lg">
                            <GrPowerCycle className="ml-5 text-[32px]" />
                            <CardHeader className="pl-4">
                                <CardTitle className="text-xl font-medium text-text2 ">
                                    Return Delivery
                                </CardTitle>
                                <CardDescription className=" text-base font-medium text-text2">
                                    Free 30 Days Delivery Returns. Details
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
            <ProductsByDate Title="Related Item" />
        </div>
    );
}

export default ProductPage;
