import Product from "../models/product.model.js";
export async function fetchProdcuts() {
    try {
        const data = Product.find({ category: "Electronics" });

        return data;
    } catch (error) {
        throw new Error(`Faild to catch categories ${error}`);
    }
}

export async function fetchProductById(id) {
    try {
        const data = await Product.findById(id);
        return data;
    } catch (err) {
        throw new Error(`Could not get a product from database ${err}`);
    }
}
