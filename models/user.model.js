import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // firstName: { type: String, required: true },
        // lastName: { type: String },
        email: { type: String, unique: true, required: true },
        // phoneNumber: String,
        password: { type: String, min: 8, max: 20, required: true },

        orders: [
            {
                type: String,
                ref: "Product",
            },
        ],
        whishlist: [
            {
                type: String,
                ref: "Product",
            },
        ],
        canceled: [
            {
                date: Date,
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        ],
        return: [
            {
                date: Date,
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        ],
        purched: [
            {
                date: Date,
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
        ],
        adress: {
            street: String,
            apartment: String,
            town: String,
        },
        payment: [
            {
                method: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
