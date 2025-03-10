import React from "react";
import ShowRoute from "@/components/shared/ShowRoute";
import Image from "next/image";
import Womans from "@/public/about.png";
import ProductivityData from "@/components/ProductivityData";
import PersonalsCarusel from "@/components/PersonalsCarusel";
import OurAdvantages from "@/components/shared/OurAdvantages";
function AboutPage() {
    return (
        <div className="container mt-20 ">
            <ShowRoute />
            <div className="flex items-center gap-[70px] mt-10 ">
                <div className="flex flex-col items-start gap-10 h-full">
                    <h1 className="text-text2 font-semibold text-[54px]">
                        Our Story
                    </h1>
                    <p className="text-text2 font-normal text-xl min-w-[525px] min-h-max">
                        Launced in 2015, Exclusive is South Asia’s premier
                        online shopping makterplace with an active presense in
                        Bangladesh. Supported by wide range of tailored
                        marketing, data and service solutions, Exclusive has
                        10,500 sallers and 300 brands and serves 3 millioons
                        customers across the region.
                        <br />
                        <br />
                        Exclusive has more than 1 Million products to offer,
                        growing at a very fast. Exclusive offers a diverse
                        assotment in categories ranging from consumer.
                    </p>
                </div>
                <Image
                    src={Womans}
                    alt="womans looking at phone"
                    className="w-full h-full"
                />
            </div>
            <ProductivityData />
            <PersonalsCarusel />
            <OurAdvantages />
        </div>
    );
}

export default AboutPage;
