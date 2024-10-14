import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiOutlineCash } from "react-icons/hi";

const mockData = [
  {
    Icon: <BsShopWindow size={30} />,
    Title: "10.5k ",
    Describtion: "Sallers active our site",
  },
  {
    Icon: <PiCurrencyCircleDollarLight size={30} />,
    Title: "33k",
    Describtion: "Mopnthly Produduct Sale",
  },
  {
    Icon: <LiaShoppingBagSolid size={30} />,
    Title: "45.5k",
    Describtion: "Customer active in our site",
  },
  {
    Icon: <HiOutlineCash size={30} />,
    Title: "25k",
    Describtion: "Anual gross sale in our site",
  },
];
function ProductivityData() {
  return (
    <section className="my-36 flex items-center justify-between">
      {mockData.map((item, key) => (
        <div
          key={key}
          className="group flex w-[270px] flex-col items-center rounded-sm border-2 bg-transparent py-8 hover:bg-button2"
        >
          <div className="rounded-full border-8 border-solid border-line bg-black p-2 text-white group-hover:border-opacity-60 group-hover:bg-white group-hover:text-black">
            {item.Icon}
          </div>
          <h1 className="mb-2 mt-6 text-4xl font-semibold text-black group-hover:text-white">
            {item.Title}
          </h1>
          <p className="text-center text-xl font-normal text-black group-hover:text-white">
            {item.Describtion}
          </p>
        </div>
      ))}
    </section>
  );
}

export default ProductivityData;
