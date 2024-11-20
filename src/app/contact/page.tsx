"use client";
import React, { useState } from "react";
import ShowRoute from "@/components/shared/ShowRoute";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z
  .object({
    name: z
      .string({ required_error: "wrong password" })
      .nonempty("name is required"),
    email: z.string().email({ message: "invalid email adress" }),
    phone: z
      .string({ required_error: "wrong phone number" })
      .nonempty("phone is requried"),
    message: z.string().nonempty("please write something"),
  })
  .required();

function ContactPage() {
  const [error, setError] = useState("");
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const service_id: string | any = process.env.NEXT_PUBLIC_SERVICE_ID;
      const template: string | any = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE;
      const public_key: string | any = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
      await emailjs
        .send(
          service_id,
          template,
          { email: values?.email, message: values?.message },
          public_key,
        )
        .then(
          (response) => {
            console.log(response.text);
          },
          (err) => {
            setError(err.text);
          },
        );
      if (error) {
        toast({
          title: "Warning",
          description: (
            <pre className="absolute right-0 top-0 w-[340px] rounded-md bg-white p-6 text-black">
              <code className="text-black">error</code>
            </pre>
          ),
        });
      }
    } catch (err) {
      console.log(error);
    }
  }
  return (
    <div className="container mt-20">
      <ShowRoute />
      <div className="mt-20 flex w-full gap-8">
        <div className="item-start flex w-[340px] flex-col gap-8 bg-white px-9 py-10 shadow-md">
          <div className="item-start flex flex-col">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-button2 p-3">
                <HiOutlinePhone className="text-3xl text-white" />
              </div>
              <h1 className="text-xl font-medium">Call To Us</h1>
            </div>
            <p className="mb-4 mt-6 text-sm font-normal">
              We are available 24/7, 7 days a week.
            </p>
            <span className="text-sm font-normal">Phone: +8801611112222</span>
          </div>
          <hr className="h-[1px] w-full" />
          <div className="item-start flex flex-col">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-button2 p-3">
                <MdOutlineEmail className="text-3xl text-white" />
              </div>
              <h1 className="text-xl font-medium">Write To US</h1>
            </div>
            <p className="mb-4 mt-6 text-sm font-normal">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <span className="text-sm font-normal">
              Emails: customer@exclusive.com
            </span>
          </div>
        </div>
        <div className="flex w-full flex-row bg-white px-8 py-10 shadow-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Your Name *" {...field} />
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
                      <FormControl className="rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Your Email *" {...field} />
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
                      <FormControl className="rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                        <Input placeholder="Your Phone *" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="h-full">
                    <FormControl className="h-full rounded-sm border-none bg-secondary py-3 text-xl outline-none">
                      <Textarea
                        className="max-h-min min-h-[250px] bg-secondary pl-4 pt-3 text-xl font-normal"
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="text-white">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
