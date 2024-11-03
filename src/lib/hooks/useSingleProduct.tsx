"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchProduct } from "../features/productsSlice";
interface Product {
    id: string;
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
export default function useSingleProduct(id: string): Product {
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector<RootState>(
        (state) => state.productsSlice.product
    );
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [id, dispatch]);
    return product as Product;
}
