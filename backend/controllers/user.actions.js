import User from "../models/user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function fetchUserInfo(id) {
    try {
        const userId = new mongoose.Types.ObjectId(id);
        const data = await User.findById({ _id: userId });
        return data;
    } catch (error) {
        throw new Error(`Can't find user realted to id: ${error.message}`);
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
        await User.findByIdAndUpdate(
            userId,
            {
                // firstName,
                // lastName,
                email,
                // phoneNumber,
                password,
                adress,
                newPassword,
            },
            { upsert: true }
        );
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

export async function userCreate(email, password) {
    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return { message: "User already exists!" };
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
