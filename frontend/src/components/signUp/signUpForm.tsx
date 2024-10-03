"use client";
import React, { useState } from "react";
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
import { userCreate } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { FiAlertTriangle } from "react-icons/fi";

const formSchema = z.object({
    email: z.string().email({ message: "invalid email adress" }).min(8).max(20),
    password: z.string({ message: "wrong password" }).min(4).max(20),
});

function SingUpForm() {
    const [error, setError] = useState("");
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
        const userExists = await userCreate(values.email, values.password);

        if (userExists?.message) {
            setError(userExists.message);
            toast({
                title: <FiAlertTriangle size={20} />,
                description: (
                    <pre className="w-[340px] rounded-md bg-white text-black absolute top-0 right-0 p-6">
                        <code className="text-black">{error}</code>
                    </pre>
                ),
            });
            return;
        } else {
            router.push("/signup");
        }
    }
    return (
        <div>
            <h1 className="text-black text-4xl font-medium">
                Create an account
            </h1>
            <p className="mt-6 mb-12 text-black text-xl font-normal">
                Enter your details below
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className="border-0 border-b-[1px] rounded-none border-text2 text-xl outline-none">
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
                                <FormControl className="border-0 border-b-[1px] rounded-none border-text2 text-xl outline-none">
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="text-white w-full justify-center"
                    >
                        Create Account
                    </Button>
                </form>
            </Form>
            <div className="flex items-center gap-4 mt-8 justify-center">
                <span className="text-text2 text-xl font-normal text-opacity-75">
                    Already have account?
                </span>
                <Link
                    className="text-text-2 text-xl font-medium underline"
                    href="/"
                >
                    Log in
                </Link>
            </div>
        </div>
    );
}

export default SingUpForm;
