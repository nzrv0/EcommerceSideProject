"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchAllCategories } from "../features/categorySlice";
interface Categories {
    _id: string;
    name: string;
}
export default function useCategories(category?: string): Categories[] {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector<RootState>(
        (state) => state.categorySlice.categories
    );
    useEffect(() => {
        dispatch(fetchAllCategories(category));
    }, [category, dispatch]);
    if (products) {
        return products as Categories[];
    }
    return [];
}
