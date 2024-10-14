"use client";
import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import footerQr from "@/public/footerQr.png";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import {
    RiFacebookLine,
    RiTwitterLine,
    RiInstagramLine,
    RiLinkedinLine,
} from "react-icons/ri";

const FormSchema = z.object({
    email: z.string().email(),
});

const Support: { [key: string]: string }[] = [
    { Address: "Example Address" },
    { Email: "exclusive@gmail.com" },
    { Number: "+000000000" },
];
const Account: { [key: string]: string }[] = [
    { "My Account": "/account" },
    { "Login/Register": "/signup" },
    { Cart: "/cart" },
    { Whislist: "/wish" },
    { Shop: "/products" },
];
const QuickLink: { [key: string]: string }[] = [
    { "Privacy Policy": "/" },
    { "Terms Of Use": "/" },
    { FAQ: "/" },
    { Contact: "/" },
];
const SocialAccounts = [
    {
        Account: "Facebook",
        URL: "https://facebook.com",
        Icon: <RiFacebookLine size={18} />,
    },
    {
        Account: "Twitter",
        URL: "https://twitter.com",
        Icon: <RiTwitterLine size={18} />,
    },
    {
        Account: "Instagram",
        URL: "https://instagram.com",
        Icon: <RiInstagramLine size={18} />,
    },
    {
        Account: "LinkedIn",
        URL: "https://linkedin.com",
        Icon: <RiLinkedinLine size={18} />,
    },
];
function Footer() {
    const form = useForm<z.infer<typeof FormSchema>>({
        mode: "onSubmit",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-white text-black p-4 absolute top-0">
                    <code className="text-black">example@gmail.com</code>
                </pre>
            ),
        });
    }
    return (
        <footer className="bg-black max-w-full text-white mt-36">
            <div className="flex items-start gap-20 justify-center py-20">
                <div className="">
                    <h5 className="text-3xl font-bold pb-6">Exclusive</h5>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="relative w-2/3 space-y-6 border-white focus:border-none"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-2xl font-medium ">
                                            Subscribe
                                        </FormLabel>
                                        <FormDescription className="text-white text-xl font-normal pt-6">
                                            Get 10% off your first order
                                        </FormDescription>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                {...field}
                                                className="text-xl font-normal  bg-transparent pt-4"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                size="default"
                                type="submit"
                                className="px-4 py-2 text-lg font-normal text-black gap-2 bg-white"
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-3xl font-bold pb-6">Support</h5>

                    {Support.map((item, key) => {
                        return (
                            <span
                                key={key}
                                className="text-white text-xl font-normal pt-4"
                            >
                                {Object.values(item)[0]}
                            </span>
                        );
                    })}
                </div>
                <div className="flex flex-col">
                    <h5 className="text-3xl font-bold pb-6">Account</h5>

                    {Account.map((item, key) => (
                        <Link
                            className="text-white text-xl font-normal pt-4"
                            href={Object.values(item)[0]}
                            key={key}
                        >
                            {Object.keys(item)}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col">
                    <h5 className="text-3xl font-bold pb-6">Quick Link</h5>

                    {QuickLink.map((item, key) => (
                        <Link
                            className="text-white text-xl font-normal pt-4"
                            href={Object.values(item)[0]}
                            key={key}
                        >
                            {Object.keys(item)}
                        </Link>
                    ))}
                </div>
                <div>
                    <h5 className="text-3xl font-bold pb-6">Download App</h5>
                    <span className="text-base font-medium mb-2 text-text">
                        Save $3 with App New User Only
                    </span>
                    <Image src={footerQr} alt="qr" />
                    <div className="flex gap-6 mt-6">
                        {SocialAccounts.map((items) => {
                            const item = Object.values(items);
                            return (
                                <Link
                                    href={item[1].toString()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={item[0].toString()}
                                >
                                    {item[2]}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <span className="text-primary1 pb-6 mx-auto flex justify-center">
                © Copyright Rimel 2022. All right reserved
            </span>
        </footer>
    );
}

export default Footer;
