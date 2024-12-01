"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { addWish } from "@/lib/features/whisListSlice";
import { addCard } from "@/lib/features/cartSlice";
import handleAddWish from "@/components/wishlist/action";
import handleAddCart from "@/components/Cart/action";
import Link from "next/link";
function SingleProduct(props: any) {
  const {
    _id,
    image,
    title,
    price,
    rating,
    review,
    discount,
    like_state = false,
  } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [like, setLike] = useState(like_state && true);
  const [card, setCard] = useState(false);
  function handleLike() {
    dispatch(addWish(props));
    handleAddWish(_id);
    setLike(!like);
  }
  function handleCard() {
    dispatch(addCard(props));
    handleAddCart(_id, 1);
    setCard(!card);
  }
  return (
    <section className="flex flex-col">
      <Card className="group h-64 w-72 rounded-sm border-none bg-secondary">
        <CardContent
          className={cn("relative grid h-full place-items-center p-0")}
        >
          {discount ? (
            <span className="absolute left-3 top-3 rounded-sm bg-secondary2 px-3 py-1 text-base font-normal text-white">
              -{discount}%
            </span>
          ) : (
            <span className="absolute left-3 top-3 inline-block rounded-sm bg-button1 px-3 py-1 text-base font-normal text-white">
              NEW
            </span>
          )}
          <div className="peer absolute right-3 top-3 flex flex-col gap-2">
            <Button
              variant="deafult"
              size="default"
              className="justify-center gap-0 rounded-full bg-white p-2"
              onClick={handleLike}
            >
              {!like ? <FaRegHeart size={16} /> : <FaHeart size={16} />}
            </Button>
          </div>
          <Link href={`product/${_id}`}>
            <Image
              className="h-[200px] min-w-[180px] select-none object-contain"
              src={`data:image/png;base64,${image}`}
              alt="image"
              width={100}
              height={100}
              loading="lazy"
            ></Image>
          </Link>

          <Button
            className="absolute bottom-0 left-0 hidden w-full justify-center rounded-b-lg bg-black py-3 text-white hover:bg-black group-hover:flex"
            onClick={handleCard}
            disabled={card}
          >
            Add To Cart
          </Button>
        </CardContent>
      </Card>
      <div className="flex flex-col items-start gap-2 pt-4">
        <h2 className="text-xl font-medium text-text2">{title}</h2>
        <p className="text-xl font-medium text-secondary2">
          ${price}
          {discount && (
            <span className="pl-3 text-black text-opacity-50 line-through">
              ${price - (price * discount) / 100}
            </span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {rating % 2 !== 0 &&
              Array.from({ length: rating }).map((_, key) => (
                <GoStarFill key={key} size={20} color="#FFAD33" />
              ))}
            {Array.from({ length: Math.ceil(5 - rating) }).map((_, key) => (
              <GoStarFill key={key} size={20} color="black" opacity="25%" />
            ))}
          </div>
          {review && (
            <span className="text-sm font-semibold text-text1">
              ({review.length})
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
