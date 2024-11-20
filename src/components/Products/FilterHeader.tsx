"use client";
import React from "react";
import { BsList } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { sortProducts, setView } from "@/lib/features/filterSlice";
function FilterHeader() {
  const dispatch = useDispatch();
  const productsLength =
    useSelector<RootState, any>((state) => state.filterSlice.productItems) ||
    "";
  const view = useSelector<RootState, any>((state) => state.filterSlice.view);

  return (
    <div className="mb-8 flex flex-row items-center justify-between">
      <div className="mr-2 flex items-center gap-2">
        <button
          type="button"
          className={`${
            view && "bg-black"
          } rounded-md border-[1px] border-black p-[3px]`}
          onClick={() => dispatch(setView(true))}
        >
          <BsFillGridFill size={14} color={view ? "white" : ""} />
        </button>
        <button
          type="button"
          onClick={() => dispatch(setView(false))}
          className={`${
            !view && "bg-black"
          } rounded-md border-[1px] border-black p-[3px]`}
        >
          <BsList size={14} color={!view ? "white" : ""} />
        </button>
      </div>
      <p className="text-clr-grey-3 inline-block whitespace-nowrap text-base font-normal">{`${productsLength?.length} Products Found`}</p>
      <hr className="mx-8 inline-block h-0.5 w-full bg-black opacity-20" />
      <div className="flex items-center gap-3 whitespace-nowrap">
        Sort By
        <select onChange={(e) => dispatch(sortProducts(e.target.value))}>
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (A - Z)</option>
          <option value="z-a">Name (Z - A)</option>
        </select>
      </div>
    </div>
  );
}

export default FilterHeader;
