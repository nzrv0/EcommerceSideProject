"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchByCategory } from "../features/productsSlice";
interface Products {
    _id: string;
    name: string;
    image?: string;
    description: string;
    price: number;
    rating?: number;
    reviews?: string[];
    category: string;
    inStock?: boolean;
    colours: string[];
    quantity: number;
    discount?: number;
}
export default function useProdcutsByCategory(category?: string): Products[] {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector<RootState>(
        (state) => state.productsSlice.products
    );
    useEffect(() => {
        dispatch(fetchByCategory(category));
    }, [category]);
    if (products) {
        return products as Products[];
    }
    return [];
}
