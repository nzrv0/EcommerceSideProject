import express from "express";
import {
    fetchProductById,
    fetchProdcuts,
} from "../controllers/product.actions.js";

const router = express.Router();

router.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await fetchProductById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.get("/products", async (req, res) => {
    try {
        const product = await fetchProdcuts();
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});
export default router;
