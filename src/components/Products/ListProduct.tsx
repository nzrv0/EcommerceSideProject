"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function ListProduct({ products }: any) {
    
    return (
        <div className="max-w-full flex flex-col gap-y-12">
            {products?.map((product: any) => {
                const { _id, name, image, price, description } = product;
                return (
                    <div
                        key={_id}
                        className="flex flex-row lg:flex-nowrap flex-wrap items-center max-w-full gap-x-8"
                    >
                        <Image
                            className="max-w-[300px] h-[200px] w-full rounded-radius object-contain"
                            src={`data:image/png;base64,${image}`}
                            alt="image"
                            width={100}
                            height={100}
                        />
                        <div className="w-full h-auto">
                            <h2 className="mb-2 text-2xl text-black font-bold tracking-spacing">
                                {name}
                            </h2>
                            <h4 className="mb-3 text-base text-clr-primary-6 font-bold tracking-spacing">
                                {`$${Math.floor(price)}, ${Math.floor(
                                    price % 100
                                )}`}
                            </h4>
                            <p className="mb-4 max-w-full text-base text-clr-grey-3 ">
                                {`${description.slice(0, 200)}...`}
                            </p>
                            <Link href={`/product/${_id}`}>
                                <button
                                    type="button"
                                    className="cursor-pointer text-base py-[0.25rem] px-2 bg-clr-primary-5 rounded-radius font-normal text-white  transition-all duration-500 bg-black rounded-md"
                                >
                                    DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListProduct;
