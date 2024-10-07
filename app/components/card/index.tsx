import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCardProps } from "@/app/lib/props";
import React from "react";

const ProductCard = ({ product }: ProductCardProps) => {
  const price: number =
    product.discountPercentage !== 0
      ? product.basePrice * (1 - product.discountPercentage / 100)
      : product.basePrice;
  return (
    <>
      <Card
        key={product.id}
        className="bg-slate-50 border-none shadow-none relative"
      >
        <img src={"http://" + product.picture} alt={product.name} />
        <CardHeader>
          <CardTitle className="font-serif">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-baseline">
          <p className="text-violet-700 font-semibold text-lg">
            ${parseFloat(price.toString()).toFixed(2)}
          </p>
          {product.discountPercentage !== 0 && (
            <p className="line-through">${product.basePrice}</p>
          )}
        </CardContent>
        {product.discountPercentage !== 0 && (
          <span className="absolute top-3 right-3 bg-violet-700 text-white text-sm px-2 py-1 rounded-md font-semibold">{`- ${product.discountPercentage}%`}</span>
        )}
      </Card>
    </>
  );
};

export default ProductCard;
