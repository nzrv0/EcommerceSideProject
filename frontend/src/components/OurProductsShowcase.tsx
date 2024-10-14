import React from "react";
import Image from "next/image";
import Link from "next/link";
import Playstation from "@/public/playstation.png";
import Woman from "@/public/woman.png";
import Echo from "@/public/echo.png";
import Perfume from "@/public/parfume.png";
function OurProductsShowcase() {
  return (
    <section className="my-36 flex flex-col gap-16">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-4">
          <span className="h-10 w-5 rounded-sm bg-secondary2" />
          <h1 className="text-xl font-semibold text-secondary2">
            Our Products
          </h1>
        </div>
        <p className="text-5xl font-semibold text-text2">
          Explore Our Products
        </p>
      </div>
      <div className="flex h-auto w-full items-start gap-8">
        <div className="relative flex h-[600px] min-w-[570px] items-end justify-center rounded-sm bg-black">
          <div className="absolute bottom-8 left-8 flex h-auto w-[242px] flex-col items-start gap-4 text-wrap text-white">
            <h1 className="text-3xl font-semibold">PlayStation 5</h1>
            <p className="text-sm font-normal">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/products" className="text-xl font-medium underline">
              Shop Now
            </Link>
          </div>
          <Image src={Playstation} alt="playstation" className="" />
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <div className="relative flex h-[284px] w-full items-end justify-end rounded-sm bg-black">
            <div className="absolute bottom-8 left-8 flex h-auto w-[242px] flex-col items-start gap-4 text-wrap text-white">
              <h1 className="text-3xl font-semibold">Women’s Collections</h1>
              <p className="text-sm font-normal">
                Featured woman collections that give you another vibe.
              </p>
              <Link href="/products" className="text-xl font-medium underline">
                Shop Now
              </Link>
            </div>
            <Image src={Woman} alt="woman" className="" />
          </div>
          <div className="flex w-full items-start gap-8">
            <div className="relative flex h-[284px] w-full items-center justify-center rounded-sm bg-black">
              <div className="absolute bottom-8 left-8 flex h-auto w-[242px] flex-col items-start gap-4 text-wrap text-white">
                <h1 className="text-3xl font-semibold">Speakers</h1>
                <p className="text-sm font-normal">Amazon wireless speakers</p>
                <Link href="products" className="text-xl font-medium underline">
                  Shop Now
                </Link>
              </div>
              <Image src={Echo} alt="echo" className="" />
            </div>
            <div className="relative flex h-[284px] w-full items-center justify-center rounded-sm bg-black">
              <div className="absolute bottom-8 left-8 flex h-auto w-[242px] flex-col items-start gap-4 text-wrap text-white">
                <h1 className="text-3xl font-semibold">Perfume</h1>
                <p className="text-sm font-normal">GUCCI INTENSE OUD EDP</p>
                <Link
                  href="/products"
                  className="text-xl font-medium underline"
                >
                  Shop Now
                </Link>
              </div>
              <Image src={Perfume} alt="perfume" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProductsShowcase;
