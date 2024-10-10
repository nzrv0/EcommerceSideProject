"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
function ListProduct() {
    const products = useSelector<RootState>(
        (state) => state.filterSlice.productItems
    );
    return (
        <div className="max-w-full h-auto grid grid-cols-3 gap-x-6 gap-y-8">
            {products?.map((product) => {
                const { _id, name, image, price } = product;
                return (
                    <div className="flex flex-col w-full gap-6" key={_id}>
                        <div className="after:rounded-lg group relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:hover:opacity-30 after:bg-black after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700">
                            <Image
                                className="w-full h-56 object-contain "
                                src={`data:image/png;base64,${image}`}
                                alt="image"
                                width={100}
                                height={100}
                            />
                            <Link
                                href={`/product/${_id}`}
                                type="button"
                                className="absolute top-2/4 left-2/4 z-20"
                            >
                                <IoSearch className="hidden group-hover:inline-block bg-clr-primary-5 cursor-pointer w-11 h-11 rounded-full p-2 transofrm -translate-x-2/4 -translate-y-2/4  transition-all duration-500 z-20 text-white" />
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h4 className="font-normal text-base text-bg-clr-grey-1 leading-[0.1rem]">
                                {name}
                            </h4>
                            <p className="font-normal text-base text-clr-primary-5 leading-[0.1rem]">
                                {`$${Math.floor(price)},${Math.floor(
                                    price % 100
                                )}`}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListProduct;
