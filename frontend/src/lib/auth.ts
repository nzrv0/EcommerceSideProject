import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userValidate } from "@/lib/actions/user.actions";
import { cookies } from "next/headers";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "please enter your email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "please enter your password",
                },
            },
            authorize: async (credentials) => {
                const user = await userValidate(
                    credentials?.email,
                    credentials?.password
                );
                return user;
            },
        }),
    ],
    // callbacks: {
    //     async signIn({ user, account }) {
    //         const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    //         const token = crypto.randomBytes(32).toString("hex");
    //         cookies().set("token", token, {
    //             expires: expireAt,
    //             sameSite: "strict",
    //             path: "/",
    //         });
    //     },
    // },
    // jwt: {
    //     async encode(params: {
    //         token: JWT
    //     })
    // },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
};
