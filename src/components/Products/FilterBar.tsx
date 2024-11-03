"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { AppDispatch, RootState } from "@/lib/store";
import { setProducts, filterProducts } from "@/lib/features/filterSlice";
import { cn } from "@/lib/utils";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const categories = [
  "All",
  "Electronics",

  "Clothing",
  "Books",
  "Toys",
  "Home Appliances",
];
const colors = [
  "Black",
  "White",
  "Blue",
  "Gray",
  "Silver",
  "Red",
  "Green",
  "Pink",
];

interface Filter {
  search?: string;
  category?: string;
  color?: string;
  price?: string;
  inStock?: boolean;
}
const InitialState = {
  search: "",
  category: "All",
  color: "All",
  price: "0",
  inStock: false,
};
function FilterBar() {
  const query = useSearchParams();
  const categoryQuery: string[] | string | undefined = query
    .get("category")
    ?.split("_");
  const queryFormat =
    categoryQuery &&
    categoryQuery
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");

  const [filter, setFilter] = useState<Filter>(InitialState);
  const { search, category, color, price, inStock } = filter;

  const dispatch = useDispatch<AppDispatch>();
  const MaxPrice = useSelector<RootState>(
    (state) => state.filterSlice.max_price,
  );
  useEffect(() => {
    setFilter({ ...filter, category: queryFormat });
  }, [query]);

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter, setFilter]);

  return (
    <aside className="sticky left-0 top-4 flex h-min w-full max-w-[200px] flex-col items-start">
      <div className="md:sticky md:top-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          className="bg-clr-grey-10 mb-9 w-full p-2"
        />
        <div className="text-clr-grey-1 mb-5 text-base font-bold tracking-widest">
          Category
          <div>
            {categories.map((item, id) => (
              <button
                type="button"
                key={id}
                onClick={() => {
                  setFilter({ ...filter, category: item });
                }}
                className={cn(
                  item === category &&
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gray-950 after:content-['']",
                  "tracking-spacing relative my-1.5 block text-sm font-normal text-text2",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="text-clr-grey-1 mb-5 text-base font-bold tracking-widest">
          Colors
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setFilter({ ...filter, color: "All" })}
              className={`tracking-spacing text-clr-grey-5 relative mr-2 inline-block text-sm font-normal ${
                color === "All" &&
                "after:bg-clr-grey-5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:content-['']"
              }`}
            >
              All
            </button>
            {colors.map((item, id) => (
              <button
                type="button"
                key={id}
                onClick={() => setFilter({ ...filter, color: item })}
                className={`relative mr-2 inline-block h-4 w-4 rounded-full border border-black p-2 opacity-50 ${
                  color === item && "p-2 opacity-100"
                }`}
                style={{ backgroundColor: `${item}` }}
              >
                {color === item && (
                  <AiOutlineCheck className="absolute left-2/4 top-2/4 h-3 w-3 -translate-x-2/4 -translate-y-2/4 text-white" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="text-clr-grey-1 mb-5 text-base font-bold tracking-widest">
          Price
          <p className="tracking-spacing text-clr-grey-3 my-2 block text-sm font-normal">{`$${price}`}</p>
          <input
            type="range"
            className="block"
            onChange={(e) => setFilter({ ...filter, price: e.target.value })}
            step={0.01}
            min={0.0}
            max={MaxPrice as string}
            value={price}
          />
        </div>
        <div className="mb-4 flex items-center">
          inStock
          <input
            type="checkbox"
            checked={inStock}
            onClick={() => setFilter({ ...filter, inStock: !inStock })}
            onChange={() => {}}
            className="ml-auto"
          />
        </div>
        <button
          type="button"
          onClick={() => setFilter(InitialState)}
          className="tracking-spacing rounded-md bg-black px-2 py-1 text-xs font-normal text-white"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}

export default FilterBar;
