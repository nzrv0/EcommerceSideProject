"use client";
import React from "react";
import Image from "next/image";
import sideImage from "@/public/signup.png";
import { SessionProvider } from "next-auth/react";

function layout({ children, session }) {
    return (
        <SessionProvider session={session}>
            <main className="flex items-center mt-16 gap-32">
                <Image
                    className="w-[805px] h-auto"
                    src={sideImage}
                    alt="phone iamge"
                />
                <div>{children}</div>
            </main>
        </SessionProvider>
    );
}

export default layout;
