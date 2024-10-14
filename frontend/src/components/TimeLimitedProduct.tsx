import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import JBL from "@/public/jbl.png";
import Link from "next/link";
function TimeLimitedProduct() {
  return (
    <section className="mb-20 mt-36 bg-black p-10">
      <div className="flex items-center gap-7">
        <div className="flex flex-col items-start gap-8 text-white">
          <h1 className="text-xl font-semibold text-button1">Categories</h1>
          <h2 className="text-6xl font-semibold">
            Enhance Your Music Experience
          </h2>
          <div className="flex items-center gap-6 text-[11px] font-normal text-text2">
            <span className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="-mb-1 text-xl font-semibold">0</span>
              Days
            </span>
            <span className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="-mb-1 text-xl font-semibold">12</span>
              Hours
            </span>
            <span className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="-mb-1 text-xl font-semibold">36</span>
              Minutes
            </span>
            <span className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white">
              <span className="-mb-1 text-xl font-semibold">12</span>
              Seconds
            </span>
          </div>
          <Button className="bg-button1 text-white hover:bg-button1">
            <Link href="/products">Buy Now!</Link>
          </Button>
        </div>
        <div className="h-full w-full">
          <Image src={JBL} alt="Jbl speaker" className="z-40" />
        </div>
      </div>
    </section>
  );
}

export default TimeLimitedProduct;
