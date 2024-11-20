import React from "react";
import Image from "next/image";
import { IoIosImages } from "react-icons/io";

function Product({ name, image }: { name: string; image: any }) {
  return (
    <>
      <div className="mr-8 flex flex-col items-start gap-4">
        {Array.from({ length: 4 }).map((_, key) => (
          <div
            key={key}
            className="grid min-h-[138px] min-w-[170px] place-items-center rounded-sm bg-secondary px-7 py-5"
          >
            <IoIosImages size={80} opacity="50%" />
          </div>
        ))}
      </div>
      <div className="grid h-[600px] min-w-[500px] place-items-center rounded-sm bg-secondary px-7">
        <Image
          className="h-auto min-w-[220px] select-none object-contain"
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
