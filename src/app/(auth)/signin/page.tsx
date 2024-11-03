"use client";
import React, { Suspense, useState } from "react";
import Cookies from "js-cookie";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { FiAlertTriangle } from "react-icons/fi";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email({ message: "invalid email adress" }).min(8).max(20),
  password: z.string({ message: "wrong password" }).min(4).max(20),
});

function SignInForm() {
  const cookie = Cookies;
  const token = cookie.get("token");
  const [error, setError] = useState("Unknown error appeared");
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data, status } = await axios.post(
        "http://localhost:3001/user/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (status === 200) {
        cookie.set("token", data.token);
        router.push("/");
      } else {
        cookie.remove("token");
        setError("Invalid parametrs");
        toast({
          title: "Warning",
          description: (
            <pre className="absolute right-0 top-0 w-[340px] rounded-md bg-white p-6 text-black">
              <code className="text-black">{error}</code>
            </pre>
          ),
        });
      }
    } catch (err) {
      throw new Error(`cannot create user ${err}`);
    }
  }
  return (
    <Suspense fallback="loading">
      <div>
        <h1 className="text-4xl font-medium text-black">Log in to Exclusive</h1>
        <p className="mb-12 mt-6 text-xl font-normal text-black">
          Enter your details below
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-none border-0 border-b-[1px] border-text2 text-xl outline-none">
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="focus:border-0 focus:outline-0">
                  <FormControl className="rounded-none border-0 border-b-[1px] border-text2 text-xl outline-none">
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <Button type="submit" className="text-white">
                Log In
              </Button>
              <Link
                className="text-xl font-medium text-button2 underline"
                href="/forgetpassword"
              >
                Forget Password?
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </Suspense>
  );
}

export default SignInForm;
