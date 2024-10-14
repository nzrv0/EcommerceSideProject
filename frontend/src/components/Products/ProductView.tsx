"use client";
import React from "react";
import ListProduct from "@/components/Products/ListProduct";
import RowProduct from "./RowProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function ProductView() {
    const products = useSelector<RootState>(
        (state) => state.filterSlice.productItems
    );
    const view = useSelector<RootState>((state) => state.filterSlice.view);
    return (
        <div>
            {!view ? (
                <ListProduct products={products} />
            ) : (
                <RowProduct products={products} />
            )}
        </div>
    );
}

export default ProductView;
