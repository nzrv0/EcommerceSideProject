import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center bg-black px-32 py-3">
      <span className="mx-auto">
        <span className="pr-2 font-normal text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>

        <Link
          href="/products"
          className="text-lg font-semibold text-white underline decoration-white decoration-solid"
        >
          Shop Now
        </Link>
      </span>

      <Select>
        <SelectTrigger className="w-min border-none bg-transparent text-white">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent className="border-none bg-black text-white">
          <SelectItem className="bg-black" value="light">
            EN
          </SelectItem>

          <SelectItem className="bg-black" value="dark">
            AZ
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Header;
