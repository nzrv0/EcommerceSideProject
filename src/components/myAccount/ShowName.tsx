import React from "react";
import useUserData from "@/lib/hooks/useUserData";

function ShowName() {
  const userData = useUserData();

  return (
    <h1 className="text-sm font-normal text-black">
      Welcome! <span className="text-red-600">Md {userData?.firstName}</span>
    </h1>
  );
}

export default ShowName;
