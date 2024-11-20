import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import useUserData from "@/lib/hooks/useUserData";
import { setCard } from "@/lib/features/cartSlice";
import Image from "next/image";
import image from "@/public/jbl.png";
function MyOrders() {
  const dispatch = useDispatch<AppDispatch>();
  let user_data = useUserData();
  const orders = useSelector<RootState, any>(
    (state) => state.cartSlice.cardProducts,
  );
  useEffect(() => {
    dispatch(setCard(user_data?.orders));
  }, [user_data]);
  return (
    <div className="flex h-full w-full flex-col gap-10">
      {orders?.map((item: any, key: any) => (
        <div className="flex w-full items-center border-2 px-4 py-2" key={key}>
          <div className="h-[50px] w-[60px]">
            <Image
              src={`data:image/png;base64,${item.order.image}`}
              className="h-full w-full object-contain"
              alt="image"
              width={50}
              height={50}
              loading="lazy"
            />
          </div>

          <h2 className="ml-6 text-xl font-normal text-black">
            {item.order.name}
          </h2>
          <p className="ml-auto text-xl font-normal text-black">
            ${item.order.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
