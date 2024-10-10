"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchAllProducts } from "../features/productsSlice";
export default function useAllProducts<ProductInterface>(
    size: string
): ProductInterface[] {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector<RootState>(
        (state) => state.productsSlice.products
    );

    useEffect(() => {
        dispatch(fetchAllProducts(size));
    }, [size]);

    return products as ProductInterface[];
}
