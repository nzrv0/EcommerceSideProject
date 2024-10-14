"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Command,
  // CommandEmpty,
  // CommandGroup,
  CommandInput,
  // CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  RiHeartLine,
  RiShoppingCartLine,
  RiUserLine,
  RiShoppingBag3Line,
  RiLogoutBoxLine,
  RiStarLine,
} from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
// import { map } from "zod";
import { ReactNode } from "react";

const Nav: { Path: string; Name: string }[] = [
  { Path: "/", Name: "Home" },
  { Path: "/contact", Name: "Contact" },
  { Path: "/about", Name: "About" },
  { Path: "/signup", Name: "Sign Up" },
];

const userOptions: { Path: string; Icon: ReactNode; Name: string }[] = [
  { Path: "/account", Icon: <RiUserLine />, Name: "Manage My Account" },
  { Path: "/order", Icon: <RiShoppingBag3Line />, Name: "My Order" },
  {
    Path: "/cancellations",
    Icon: <MdOutlineCancel />,
    Name: "My Cancellations",
  },
  { Path: "/reviews", Icon: <RiStarLine />, Name: "My Reviews" },
  { Path: "/logout", Icon: <RiLogoutBoxLine />, Name: "Logout" },
];
function Navbar() {
  const path = usePathname();
  const isActive = (href: string): boolean => href == path;
  return (
    <nav className="container relative mb-4 mt-10 flex max-w-full items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Exclusive
      </Link>
      <ul className="flex gap-12 text-xl font-normal">
        {Nav.map((item) => (
          <Link
            key={item.Path}
            href={item.Path}
            className={
              isActive(item.Path) ? "border-b-2 border-black text-text2" : ""
            }
          >
            {item.Name}
          </Link>
        ))}
      </ul>
      <div className="flex items-center">
        <Command className="max-w-60 bg-secondary">
          <CommandInput placeholder="What are you looking for?" />
          <CommandList>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}
            {/* <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup> */}
          </CommandList>
        </Command>
        <Link href="/wish" className="pl-6 pr-4">
          <RiHeartLine size={20} />
        </Link>
        <Link href="/cart" className="pr-4">
          <RiShoppingCartLine size={20} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="p-1">
                <RiUserLine size={20} />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex items-center p-4">
                <nav className="flex flex-col gap-3">
                  {userOptions.map((item) => {
                    return (
                      <NavigationMenuLink
                        key={item.Name}
                        className="flex items-center"
                      >
                        <Link href={item.Path}>
                          {item.Icon}
                          {item.Name}
                        </Link>
                      </NavigationMenuLink>
                    );
                  })}
                </nav>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="absolute -bottom-4 left-0 h-[0.5px] w-full bg-line" />
    </nav>
  );
}

export default Navbar;
