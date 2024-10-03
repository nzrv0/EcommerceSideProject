"use server";

import Category from "../models/category.model";
import Product from "../models/product.model";
import connectDB from "../mongoose";
export async function fetchCategory() {
    try {
        connectDB();
        const data = await Category.find({}, "name");
        return data;
    } catch (error) {
        throw new Error(`Faild to catch categories ${error}`);
    }
}
