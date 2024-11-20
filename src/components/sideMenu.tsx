"use client";
import useCategories from "@/lib/hooks/useCategories";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SideMenu() {
  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Toys",
    "Home Appliances",
  ];
  return (
    <div className="flex flex-col items-start gap-4 pr-4 pt-10">
      {categories.map((item, key) => {
        return (
          <Link
            className="flex min-w-56 items-center justify-between text-xl font-normal text-text2"
            key={key}
            href={`/products?category=${item.toLowerCase().split(" ").join("")}`}
          >
            {item}
            <MdOutlineKeyboardArrowRight size={20} />
          </Link>
        );
      })}
    </div>
  );
}

export default SideMenu;
