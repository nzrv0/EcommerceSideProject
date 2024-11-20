import React from "react";
import ManageRoutes from "@/components/myAccount/ManageRoutes";
import EditProfile from "@/components/myAccount/EditProfile";
import { useSearchParams } from "next/navigation";
import MyOrders from "./MyOrders";
import LogOut from "./LogOut";
function ShowContent() {
  const params = useSearchParams();

  const query = params.get("active");

  return (
    <>
      {query === "manage" ? (
        <EditProfile />
      ) : query === "orders" ? (
        <MyOrders />
      ) : query === "logout" ? (
        <LogOut />
      ) : (
        ""
      )}
    </>
  );
}

export default ShowContent;
