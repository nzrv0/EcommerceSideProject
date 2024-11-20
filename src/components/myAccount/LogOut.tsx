"use client";
import React from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
function LogOut() {
  const cookie = Cookies;
  function handleLogout() {
    cookie.remove("token");
    redirect("/");
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-4xl">Do you want to log out!</h1>
      <div className="flex flex-row items-center gap-6">
        <Button onClick={() => redirect("/")} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleLogout} variant="primary" className="text-white">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default LogOut;
