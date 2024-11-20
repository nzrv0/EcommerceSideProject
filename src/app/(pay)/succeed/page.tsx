import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

function page() {
  return (
    <div className="mt-40 flex flex-col items-center gap-3">
      <IoIosCheckmarkCircle size={60} color="green" />
      <h2 className="text-3xl">Purched!</h2>
    </div>
  );
}

export default page;
