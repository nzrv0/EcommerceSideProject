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
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { FiAlertTriangle } from "react-icons/fi";
import { signIn } from "next-auth/react";
const formSchema = z.object({
    email: z.string().email({ message: "invalid email adress" }).min(8).max(20),
    password: z.string({ message: "wrong password" }).min(4).max(20),
});
function SignInForm() {
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
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (res?.error) {
            setError(res.error);
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
            router.push("/");
        }
    }
    return (
        <div>
            <h1 className="text-black text-4xl font-medium">
                Log in to Exclusive
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
                    <div className="flex items-center justify-between">
                        <Button type="submit" className="text-white">
                            Log In
                        </Button>
                        <Link
                            className="text-button2 text-xl font-medium underline"
                            href="/forgetpassword"
                        >
                            Forget Password?
                        </Link>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default SignInForm;
