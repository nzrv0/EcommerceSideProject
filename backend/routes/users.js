import express from "express";
import { SignJWT } from "jose";
import {
    userCreate,
    fetchUserInfo,
    userValidate,
} from "../controllers/user.actions.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/users/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const users = fetchUserInfo(id);
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.post("/user/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userValidate(email, password);
        const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
        const token = await new SignJWT({ email: email })
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setExpirationTime("7d")
            .sign(secret);
        delete user.password;
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post("/user/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userCreate(email, password);
        res.status(201).json(user);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
});

export default router;
