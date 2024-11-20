"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiHeartLine, RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setWishList } from "@/lib/features/whisListSlice";
import useUserData from "@/lib/hooks/useUserData";

import { AppDispatch, RootState } from "@/lib/store";
import { setCard } from "@/lib/features/cartSlice";
import SearchProperity from "./SearchProperity";
import Cookies from "js-cookie";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

const cookie = Cookies;
const active = cookie.get("token");
const Nav: { Path: string; Name: string; Allowed?: string }[] = [
  { Path: "/", Name: "Home" },
  { Path: "/contact", Name: "Contact" },
  { Path: "/about", Name: "About" },
  { Path: "/signup", Name: "Sign Up", Allowed: active },
];

function Navbar() {
  const [name, setName] = useState<string>("");
  const path = usePathname();
  const isActive = (href: string): boolean => href == path;
  const dispatch = useDispatch<AppDispatch>();
  let whishlist =
    useSelector<RootState, any>((state) => state.wishListSlice.wishList) || "";
  let cartlist =
    useSelector<RootState, any>((state) => state.cartSlice.cardProducts) || "";
  let user_data = useUserData();
  useEffect(() => {
    dispatch(setWishList(user_data?.whishlist));
    dispatch(setCard(user_data?.orders));
  }, [user_data]);

  return (
    <nav className="container relative mb-4 mt-10 flex max-w-full items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Exclusive
      </Link>
      <ul className="flex gap-14 text-xl font-normal">
        {Nav.map((item) => (
          <Link
            key={item.Path}
            href={item.Path}
            hidden={item.Allowed ? true : false}
            className={
              isActive(item.Path) ? "border-b-2 border-black text-text2" : ""
            }
          >
            {item.Name}
          </Link>
        ))}
      </ul>

      <div className="flex items-center">
        <Command className="relative max-w-60 overflow-visible bg-secondary">
          <CommandInput
            placeholder="What are you looking for?"
            onValueChange={(search) => setName(search)}
          />
          <CommandList className="absolute top-[45px] z-40 w-full bg-secondary1">
            {name && (
              <>
                <CommandEmpty>No results found.</CommandEmpty>
                <SearchProperity name={name} />
              </>
            )}
          </CommandList>
        </Command>
        <Link href="/wish" className="pl-6 pr-4">
          <div className="relative h-min w-min">
            <div className="absolute -right-[7px] -top-[5px] grid h-[20px] w-[20px] place-items-center rounded-full bg-secondary2 text-xs text-white">
              {whishlist?.length}
            </div>
            <RiHeartLine size={26} />
          </div>
        </Link>
        <Link href="/cart" className="pr-4">
          <div className="relative h-min w-min">
            <div className="absolute -right-[10px] -top-[8px] grid h-[20px] w-[20px] place-items-center rounded-full bg-secondary2 text-xs text-white">
              {cartlist?.length}
            </div>
            <RiShoppingCartLine size={24} />
          </div>
          <div />
        </Link>
        <Link href="/myaccount?active=manage">
          <RiUserLine size={25} />
        </Link>
      </div>
      <div className="absolute -bottom-4 left-0 h-[0.5px] w-full bg-line" />
    </nav>
  );
}

export default Navbar;
