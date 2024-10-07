import { InputProps } from "@/components/ui/input";
import { ProductType } from "./types";
import { Dispatch, SetStateAction } from "react";

export interface FormInputProps extends InputProps {
  control: any;
  name: string;
  label: string;
  hint?: string;
  type?: string | undefined;
}

export interface ProductCardProps {
  product: ProductType;
}

export interface SearchInputProps extends InputProps {
  setQuery: Dispatch<SetStateAction<string>>;
}

export interface CustomSelectProps {
  setQuantity: Dispatch<SetStateAction<number>>;
}

export interface ProductInfoProps {
  product: ProductType;
  price: number;
}

export interface QuantityProps {
  product: ProductType;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export interface ActionsProps {
  quantity: number;
  price: number;
}
