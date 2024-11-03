"use client";
import React, { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import HandleSingUpRequest from "./action";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function SignInForm() {
  const [error, setError] = useState<string | null>(null);

  const cookie = Cookies;
  const { toast } = useToast();
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email({ message: "invalid email adress" }).min(8).max(20),
    password: z.string({ message: "wrong password" }).min(4).max(20),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await HandleSingUpRequest(values);
    if (response) {
      if (response.status === 201) {
        router.push("/signin");
      } else {
        cookie.remove("token");
        setError("User already exists");
      }
    }

    if (error) {
      toast({
        title: "Warning: ",
        description: (
          <pre className="absolute right-0 top-0 w-[340px] rounded-md bg-white p-6 text-black">
            <code className="text-black">{error}</code>
          </pre>
        ),
      });
    }
  }
  return (
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
        <Button type="submit" className="w-full justify-center text-white">
          Create Account
        </Button>
      </form>
    </Form>
  );
}

export default SignInForm;
