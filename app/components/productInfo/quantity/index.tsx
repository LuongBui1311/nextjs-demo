import React from "react";
import NumberInput from "../../input/numberInput";
import { QuantityProps } from "@/app/lib/props";

const Quantity = ({ product, setQuantity }: QuantityProps) => {
  return (
    <div id="quantity" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Quantity</h2>
      <div className="flex items-center justify-between">
        <NumberInput stock={product.stock} setQuantity={setQuantity} />
        <p>
          <span className="font-semibold">In stock: </span>
          {product.stock}
        </p>
      </div>
    </div>
  );
};

export default Quantity;
