import React from "react";
import Image from "next/image";
import { IoIosImages } from "react-icons/io";

function Product({ name, image }: { name: string; image: any }) {
    return (
        <>
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
                    alt={`${name} image`}
                    width={100}
                    height={100}
                    loading="lazy"
                />
            </div>
        </>
    );
}

export default Product;
