import User from "../models/user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Category from "../models/category.model.js";
import Product from "../models//product.model.js";
import { ObjectId } from "mongodb";
export async function fetchUserInfo(email) {
    try {
        const data = await User.findOne({ email: email }, "-password").populate(
            [
                { path: "whishlist", model: Product },
                { path: "orders", model: Product },
            ]
        );
        return data;
    } catch (error) {
        throw new Error(`Can't find user realted to email: ${error.message}`);
    }
}

export async function updateUser({
    userId,
    // firstName,
    // lastName,
    email,
    // phoneNumber,
    password,
    adress,
    newPassword,
}) {
    try {
        await User.findByIdAndUpdate(userId, {
            // firstName,
            // lastName,
            email,
            // phoneNumber,
            password,
            adress,
            newPassword,
        });
    } catch (error) {
        throw new Error(`Faild to update/creat user: ${error}`);
    }
}

export async function userValidate(email, password) {
    try {
        const user = await User.findOne({ email: email }, "password");
        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Error("Wrong password");
        return user;
    } catch (error) {
        throw new Error(`Faild to get user ${error}`);
    }
}

export async function userCreate(email, password, res) {
    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            // return { message: "User already exists!" };
            res.status(409).json({ message: "User already exists" });
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                email,
                password: hashPassword,
            });
            await user.save();
        }
    } catch (error) {
        throw new Error(`Faild to create user ${error}`);
    }
}

export async function addWishList(email, wish) {
    try {
        const match = await User.findOne({ email: email }, "whishlist");
        if (match.whishlist?.includes(wish)) {
            await User.updateOne(
                { email: email },
                {
                    $pull: { whishlist: wish },
                }
            );
        } else {
            await User.findOneAndUpdate(
                { email: email },
                {
                    $addToSet: { whishlist: wish },
                }
            );
        }
    } catch (err) {
        throw new Error(`Faild to add wish ${err}`);
    }
}
export async function addToCart(email, id, quantity) {
    try {
        if (quantity !== 0) {
            await User.findOneAndUpdate(
                {
                    email: email,
                },
                {
                    $addToSet: { orders: { id: id, quantity: quantity } },
                }
            );
        } else {
            await User.findOneAndUpdate(
                {
                    email: email,
                },
                {
                    $pull: { orders: id },
                }
            );
        }
    } catch (err) {
        throw new Error(`Faild to add wish ${err}`);
    }
}
