import React from "react";
import { RiCaravanLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
const mockData = [
    {
        Icon: <RiCaravanLine size={30} color="white" />,
        Title: "FREE AND FAST DELIVERY",
        Describtion: "Free delivery for all orders over $140",
    },
    {
        Icon: <TfiHeadphoneAlt size={30} color="white" />,
        Title: "24/7 CUSTOMER SERVICE",
        Describtion: "Friendly 24/7 customer support",
    },
    {
        Icon: <LuShieldCheck size={30} color="white" />,
        Title: "MONEY BACK GUARANTEE",
        Describtion: "We reurn money within 30 days",
    },
];

function OurAdvantages() {
    return (
        <section className="flex items-center justify-between">
            {mockData.map((item, key) => (
                <div key={key} className="flex flex-col items-center">
                    <div className="bg-black p-2 border-solid border-8 border-line rounded-full">
                        {item.Icon}
                    </div>
                    <h1 className="text-black text-2xl font-semibold mt-6 mb-2">
                        {item.Title}
                    </h1>
                    <p className="text-black text-sm font-normal">
                        {item.Describtion}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default OurAdvantages;
