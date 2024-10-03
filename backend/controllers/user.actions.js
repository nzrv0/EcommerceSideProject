import User from "../models/user.model.js";
import connectDB from "../mongoose.js";
// import bcrypt from "bcryptjs";

export async function fetchUserInfo(userId) {
    try {
        connectDB();
        return await User.findById(userId);
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

export async function fetchUserOrders(userId) {
    try {
        connectDB();
        await User.findById(userId);
    } catch (error) {}
}

export async function userValidate(email, password) {
    try {
        connectDB();
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
        connectDB();
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return { message: "User already exists!" };
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                ...User,
                email,
                password: hashPassword,
            });
            await user.save();
        }
    } catch (error) {
        throw new Error(`Faild to create user ${error}`);
    }
}
