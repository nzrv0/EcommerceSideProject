"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function ManageRoutes() {
  const path = usePathname();
  return (
    <div className="flex min-w-[200px] flex-col items-start gap-4">
      <h2 className="text-xl font-medium text-black">Manage My Account</h2>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center">
          &emsp; &emsp;
          <Link className="text-red-600" href={`${path}?active=manage`}>
            My Profile
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-medium text-black">My Orders</h2>
      <div>
        &emsp; &emsp;
        <Link className="text-red-600" href={`${path}?active=orders`}>
          Orders
        </Link>
      </div>
      <h2 className="text-xl font-medium text-black">Log out</h2>
      <div>
        &emsp; &emsp;
        <Link className="text-red-600" href={`${path}?active=logout`}>
          Log out
        </Link>
      </div>
    </div>
  );
}

export default ManageRoutes;
