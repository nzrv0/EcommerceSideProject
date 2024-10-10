"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { AppDispatch, RootState } from "@/lib/store";
import useAllProducts from "@/lib/hooks/useAllProducts";
import { setProducts, filterProducts } from "@/lib/features/filterSlice";
import { cn } from "@/lib/utils";
const categories = [
    "Electronics",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Kids",
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
function FilterBar() {
    const [filter, setFilter] = useState<Filter>({
        search: "",
        category: "All",
        color: "All",
        price: "0",
        inStock: false,
    });
    const { search, category, color, price, inStock } = filter;
    const products = useAllProducts("20");
    const dispatch = useDispatch<AppDispatch>();
    const MaxPrice = useSelector<RootState>(
        (state) => state.filterSlice.max_price
    );
    useEffect(() => {
        dispatch(setProducts(products));
    }, [products]);
    useEffect(() => {
        dispatch(filterProducts(filter));
    }, [search, category, color, price, inStock]);
    return (
        <aside className="max-w-[200px] h-min w-full flex flex-col items-start sticky top-4 left-0">
            <div className="md:sticky md:top-4">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) =>
                        setFilter({ ...filter, search: e.target.value })
                    }
                    className="w-full bg-clr-grey-10 p-2 mb-9"
                />
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
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
                                        "after:content-[''] after:w-full after:h-px after:bg-gray-950 after:absolute after:bottom-0 after:left-0 ",
                                    "relative font-normal tracking-spacing block text-sm text-text2 my-1.5 "
                                )}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Colors
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() =>
                                setFilter({ ...filter, color: "All" })
                            }
                            className={`relative font-normal tracking-spacing text-sm text-clr-grey-5 inline-block mr-2 ${
                                color === "All" &&
                                "after:content-[''] after:w-full after:h-px after:bg-clr-grey-5 after:absolute after:bottom-0 after:left-0 "
                            }`}
                        >
                            All
                        </button>
                        {colors.map((item, id) => (
                            <button
                                type="button"
                                key={id}
                                onClick={() =>
                                    setFilter({ ...filter, color: item })
                                }
                                className={`w-4 h-4 p-2 inline-block relative mr-2 rounded-full opacity-50 ${
                                    color === item && "p-2 opacity-100"
                                }`}
                                style={{ backgroundColor: `${item}` }}
                            >
                                {color === item && (
                                    <AiOutlineCheck className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3 text-white" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Price
                    <p className="font-normal tracking-spacing block text-sm text-clr-grey-3 my-2">{`$${price}`}</p>
                    <input
                        type="range"
                        className="block"
                        onChange={(e) =>
                            setFilter({ ...filter, price: e.target.value })
                        }
                        step={0.01}
                        min={0.0}
                        max={MaxPrice as string}
                        value={price}
                    />
                </div>
                <div className="flex items-center mb-4">
                    inStock
                    <input
                        type="checkbox"
                        checked={inStock}
                        onClick={() =>
                            setFilter({ ...filter, inStock: !inStock })
                        }
                        onChange={() => {}}
                        className="ml-auto"
                    />
                </div>
                <button
                    type="button"
                    onClick={() =>
                        setFilter({
                            search: "",
                            category: categories[0],
                            color: "All",
                            price: "0",
                            inStock: false,
                        })
                    }
                    className="px-2 py-1 bg-red-700 text-white font-normal rounded-md text-xs tracking-spacing"
                >
                    Clear Filters
                </button>
            </div>
        </aside>
    );
}

export default FilterBar;
