"use server";
import connectDB from "@/lib/mongoose";
import Product from "../models/product.model";
import { map } from "zod";
export async function fetchProdcuts() {
    try {
        connectDB();
        const data = Product.find({ category: "Electronics" });

        return data;
    } catch (error) {
        throw new Error(`Faild to catch categories ${error}`);
    }
}

export async function fetchProductById(id: string) {
    try {
        await connectDB();
        const data = await Product.findById(id);
        return data;
    } catch (err) {
        throw new Error(`Could not get a product from database ${err}`);
    }
}
