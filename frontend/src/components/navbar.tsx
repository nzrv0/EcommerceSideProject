import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import React from "react";

function Navbar() {
    return (
        <section className="bg-black flex items-center justify-center px-32 py-3">
            <span className="mx-auto">
                <span className="text-white pr-2 font-normal">
                    Summer Sale For All Swim Suits And Free Express Delivery -
                    OFF 50%!
                </span>

                <Link
                    href="/"
                    className="text-white underline decoration-solid decoration-white font-semibold text-lg "
                >
                    Shop Now
                </Link>
            </span>

            <Select>
                <SelectTrigger className="w-min bg-transparent text-white border-none">
                    <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white border-none">
                    <SelectItem className="bg-black" value="light">
                        EN
                    </SelectItem>

                    <SelectItem className="bg-black" value="dark">
                        AZ
                    </SelectItem>
                </SelectContent>
            </Select>
        </section>
    );
}

export default Navbar;
