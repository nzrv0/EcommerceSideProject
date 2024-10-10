"use client";
import React from "react";
import ListProduct from "@/components/ListProduct";
import RowProduct from "./RowProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function ProductView() {
    const view = useSelector<RootState>((state) => state.filterSlice.view);
    return <div>{!view ? <ListProduct /> : <RowProduct />}</div>;
}

export default ProductView;
