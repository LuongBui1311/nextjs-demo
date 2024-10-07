"use client";

import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import GeneralInfo from "./generalInfo";
import Quantity from "./quantity";
import Actions from "./actions";
import { ProductInfoProps } from "@/app/lib/props";

const ProductInfo = ({ product, price }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="grid xl:grid-cols-2 gap-10">
      <img src={"http://" + product.picture} alt={product.name} />
      <div id="product-info" className="flex flex-col gap-5">
        <GeneralInfo product={product} price={price} />
        <Separator />
        <Quantity product={product} setQuantity={setQuantity} />
        <Separator />
        <Actions quantity={quantity} price={price} />
      </div>
    </div>
  );
};

export default ProductInfo;
