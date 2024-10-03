"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchProduct } from "../features/productsSlice";
interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    reviews: {
        type: string;
        ref: string;
    }[];
    category: string;
    inStock: boolean;
    colours: string[];
    quantity: number;
    discount?: number;
}
export default function useSingleProduct<T>(id: string): T {
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector<RootState>((state) => state.product);
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    return product;
}
