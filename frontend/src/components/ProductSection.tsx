"use client";
import React from "react";
import Product from "@/components/Product";
import ProductDetails from "@/components/ProductDetails";
import { GrPowerCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useSingleProduct from "@/lib/hooks/useSingleProduct";
import ShowRoute from "@/components/shared/ShowRoute";

function ProductSection({ id }: { id: string }) {
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
        // quantity,
        // discount,
    } = useSingleProduct(id);
    return (
        <>
            <ShowRoute routes={[category, name]} />
            <div className="w-full flex flex-nowrap items-start mt-20 mb-36">
                <Product name={name} image={image} />
                <div className="flex flex-col items-start ml-[71px]">
                    <ProductDetails
                        id={id}
                        image={image}
                        name={name}
                        description={description}
                        price={price}
                        rating={rating}
                        reviews={reviews}
                        inStock={inStock}
                        colours={colours}
                    />
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
        </>
    );
}

export default ProductSection;
