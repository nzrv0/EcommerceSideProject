"use client";
import React, { useRef, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import useUserData from "@/lib/hooks/useUserData";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/store";
import { updateUser } from "@/lib/features/usersSlice";
const formSchema = z

  .object({
    firstName: z.string(),
    lastName: z.string().nonempty("Last name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email({ message: "invalid email adress" }),
    address: z.string(),
    currentPassword: z.string(),
    newPassword: z.string(),
    confimgPassword: z.string(),
  })
  .required()
  .refine((data) => data.newPassword === data.confimgPassword, {
    message: "Passwords don't match",
    path: ["confimgPassword"],
  });

function EditProfile() {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const userData = useUserData();
  const { firstName, lastName, email, address } = userData || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confimgPassword: "",
    },
    values: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      currentPassword: "",
      newPassword: "",
      confimgPassword: "",
    },
  });
  function setToDefault() {
    redirect("/myaccount");
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      dispatch(updateUser(values));
    } catch (err) {
      toast({
        title: "Warning",
        description: (
          <pre className="absolute right-0 top-0 w-[340px] rounded-md bg-white p-6 text-black">
            <code className="text-black">error</code>
          </pre>
        ),
      });
    }
  }
  return (
    <div className="w-full max-w-full bg-white px-20 py-10 shadow-md">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-medium text-secondary2">
          Edit Your Profile
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex w-full items-start justify-between">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-normal text-black">
                        First Name
                      </FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-normal text-black">
                        Last Name
                      </FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full items-start justify-between">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-normal text-black">
                        Email
                      </FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder={email} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl font-normal text-black">
                        Address
                      </FormLabel>
                      <FormControl className="max-w-[300px] rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder={address} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <FormLabel className="text-xl font-normal text-black">
                  Change Password
                </FormLabel>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl className="max-w-full rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Current Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl className="rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="New Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confimgPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl className="rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Confirm New Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-8">
              <Button
                type="button"
                variant={"deafult"}
                className="text-black"
                onClick={setToDefault}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="text-white"
                onSubmit={() => redirect(pathname)}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
