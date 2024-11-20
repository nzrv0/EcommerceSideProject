"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import SignInForm from "./Form";
function SignUp() {
  return (
    <div>
      <h1 className="text-4xl font-medium text-black">Create an account</h1>
      <p className="mb-12 mt-6 text-xl font-normal text-black">
        Enter your details below
      </p>
      <SignInForm />
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className="text-xl font-normal text-text2 text-opacity-75">
          Already have account?
        </span>
        <Link
          className="text-text-2 text-xl font-medium underline"
          href="/signin"
        >
          <Button variant="deafult">Log in</Button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
