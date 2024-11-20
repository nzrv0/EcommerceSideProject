"use client";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
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
import { useState } from "react";

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
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const service_id: string | any = process.env.NEXT_PUBLIC_SERVICE_ID;
      const template: string | any = process.env.NEXT_PUBLIC_DISCOUNT_TEMPLATE;
      const public_key: string | any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
      await emailjs
        .send(service_id, template, { email: data?.email }, public_key)
        .then(
          (response) => {
            console.log(response.text);
          },
          (err) => {
            setError(err.text);
          },
        );
      if (error)
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-white p-4 text-black">
              <code className="text-black">{error}</code>
            </pre>
          ),
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <footer className="mt-36 max-w-full bg-black text-white">
      <div className="flex items-start justify-center gap-20 py-20">
        <div className="">
          <h5 className="pb-6 text-3xl font-bold">Exclusive</h5>
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
                    <FormLabel className="text-2xl font-medium">
                      Subscribe
                    </FormLabel>
                    <FormDescription className="pt-6 text-xl font-normal text-white">
                      Get 10% off your first order
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-transparent pt-4 text-xl font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="default"
                type="submit"
                className="gap-2 bg-white px-4 py-2 text-lg font-normal text-black"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex flex-col">
          <h5 className="pb-6 text-3xl font-bold">Support</h5>

          {Support.map((item, key) => {
            return (
              <span key={key} className="pt-4 text-xl font-normal text-white">
                {Object.values(item)[0]}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h5 className="pb-6 text-3xl font-bold">Account</h5>

          {Account.map((item, key) => (
            <Link
              className="pt-4 text-xl font-normal text-white"
              href={Object.values(item)[0]}
              key={key}
            >
              {Object.keys(item)}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h5 className="pb-6 text-3xl font-bold">Quick Link</h5>

          {QuickLink.map((item, key) => (
            <Link
              className="pt-4 text-xl font-normal text-white"
              href={Object.values(item)[0]}
              key={key}
            >
              {Object.keys(item)}
            </Link>
          ))}
        </div>
        <div>
          <h5 className="pb-6 text-3xl font-bold">Download App</h5>
          <span className="mb-2 text-base font-medium text-text">
            Save $3 with App New User Only
          </span>
          <Image src={footerQr} alt="qr" />
          <div className="mt-6 flex gap-6">
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
      <span className="mx-auto flex justify-center pb-6 text-primary1">
        © Copyright Rimel 2022. All right reserved
      </span>
    </footer>
  );
}

export default Footer;
