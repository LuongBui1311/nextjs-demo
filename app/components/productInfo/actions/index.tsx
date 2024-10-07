import { Button } from "@/components/ui/button";
import { ActionsProps } from "@/app/lib/props";
import React from "react";

const Actions = ({ quantity, price }: ActionsProps) => {
  const totalPrice = (quantity * price).toString();
  return (
    <div id="actions" className="flex flex-col gap-5">
      <div id="total" className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Total: </h2>
        <p className="text-2xl font-semibold text-violet-700">
          ${parseFloat(totalPrice).toFixed(2)}
        </p>
      </div>
      <div id="buttons" className="grid md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          className=" md:py-8 md:text-xl border-violet-700 text-violet-700 font-semibold "
        >
          ADD TO CART
        </Button>
        <Button className="md:py-8 md:text-xl bg-violet-700 text-white font-semibold hover:bg-violet-800">
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default Actions;
