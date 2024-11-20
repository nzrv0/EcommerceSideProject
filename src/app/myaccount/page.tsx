"use client";
import React from "react";
import ShowRoute from "@/components/shared/ShowRoute";
import ManageRoutes from "@/components/myAccount/ManageRoutes";
import ShowName from "@/components/myAccount/ShowName";
import ShowContent from "@/components/myAccount/ShowContent";

function page() {
  return (
    <div className="container">
      <div className="my-20 flex items-center justify-between">
        <ShowRoute routes={["My Account"]} />
        <ShowName />
      </div>
      <div className="flex items-start gap-[100px]">
        <ManageRoutes />
        <ShowContent />
      </div>
    </div>
  );
}

export default page;
