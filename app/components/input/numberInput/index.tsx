import { Input } from "@/components/ui/input";
import React from "react";

const NumberInput = ({stock, setQuantity}: any) => {
  return (
    <>
      <Input
        type="number"
        min={0}
        max={stock}
        defaultValue={0}
        className="w-1/5"
        onChange={(e) => {setQuantity(e.target.value)}}
      />
    </>
  );
};

export default NumberInput;
