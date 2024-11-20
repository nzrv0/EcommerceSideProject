"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GoStarFill } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { addWish } from "@/lib/features/whisListSlice";
import handleAddWish from "./wishlist/action";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { addCard } from "@/lib/features/cartSlice";
import handleAddCart from "./Cart/action";
import { useRouter } from "next/navigation";
function ProductDetails(props: any) {
  const {
    id,
    image,
    name,
    description,
    price,
    rating,
    reviews,
    inStock,
    colours,
  } = props;
  const [quantity, setQuantity] = useState<number>(1);
  const [like, setLike] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  function increaseQuantity() {
    setQuantity((item) => item + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((item) => item - 1);
    }
  }
  function handleLike() {
    dispatch(addWish(props));
    handleAddWish(id);
    setLike(!like);
  }
  function handleCart() {
    dispatch(addCard(props));
    handleAddCart(id, quantity);
    router.push("/pay");
  }
  return (
    <>
      <h1 className="text-3xl font-semibold text-text2">{name}</h1>
      <div className="my-4 flex items-center">
        <div className="mr-2 flex items-center">
          {rating % 2 !== 0 &&
            Array.from({ length: rating }).map((_, key) => (
              <GoStarFill key={key} size={20} color="#FFAD33" />
            ))}
          {Array.from({ length: Math.ceil(5 - rating) }).map((_, key) => (
            <GoStarFill key={key} size={20} color="black" opacity="25%" />
          ))}
        </div>
        <span className="text-sm font-normal text-text1">
          ({reviews?.length} Reviews)
        </span>
        <div className="mx-4 h-5 w-[1px] bg-text1" />
        {inStock ? (
          <span className="text-sm font-normal text-button1">In Stock</span>
        ) : (
          <span className="text-sm font-normal text-secondary2">
            Not in Stock
          </span>
        )}
      </div>
      <h2 className="text-3xl font-normal text-text2">${price}</h2>
      <p className="my-6 text-wrap text-sm font-normal text-text2">
        {description}
      </p>
      <hr className="w-full text-text1" />
      <div className="my-6 flex items-center">
        <span className="mr-6 text-2xl font-normal text-text2">Colours:</span>
        {colours?.map((item: string, key: number) => (
          <Button
            key={key}
            size="default"
            variant="deafult"
            className={cn(
              `bg-${item}`,
              `mr-2 h-1 min-w-1 rounded-full border-2 border-solid border-white outline outline-2 outline-black`,
            )}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex">
          <Button
            onClick={decreaseQuantity}
            className="px-3 py-5"
            variant="secondary"
          >
            <FiMinus size={20} />
          </Button>
          <div className="grid min-h-full place-items-center border-2 border-text2 border-opacity-50 px-8 py-2 text-2xl font-medium text-text2">
            {quantity}
          </div>
          <Button
            onClick={increaseQuantity}
            className="px-3 py-5"
            variant="primary"
          >
            <FiPlus size={20} color="white" />
          </Button>
        </div>
        <Button
          variant="primary"
          size="secondary"
          className="text-white"
          onClick={handleCart}
        >
          Buy Now
        </Button>
        <Button
          variant="secondary"
          className="px-[12px] py-[11px]"
          onClick={handleLike}
        >
          {!like ? <FaRegHeart size={30} /> : <FaHeart size={30} />}
        </Button>
      </div>
    </>
  );
}

export default ProductDetails;
