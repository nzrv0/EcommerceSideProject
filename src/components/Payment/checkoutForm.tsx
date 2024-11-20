"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
const FormSchema = z
  .object({
    firstname: z.string().nonempty({ message: "plesage provide a name" }),
    companyname: z.string(),
    streetAddress: z.string().nonempty("please provide a address"),
    apartment: z.string(),
    town: z.string().nonempty("please provide town/city"),
    phone: z.string().nonempty("please provide number"),
    email: z.string().email("please provide a mail"),
  })
  .required();

function CheckoutForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      companyname: "",
      streetAddress: "",
      apartment: "",
      town: "",
      phone: "",
      email: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="absolute top-0 mt-2 w-[340px] rounded-md bg-white p-4 text-black">
          <code className="text-black">example@gmail.com</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-2/3 space-y-6 border-white focus:border-none"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                First Name*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Company Name
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Street Address*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="apartment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Apartment, floor, etc. (optional)
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="town"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Town/City*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Phone Number*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-normal text-black opacity-40">
                Email Address*
              </FormLabel>
              <FormControl>
                <Input {...field} className="h-[50px] w-[470px] bg-secondary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CheckoutForm;
