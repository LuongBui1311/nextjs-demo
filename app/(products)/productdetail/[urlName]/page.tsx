import ProductInfo from "@/app/components/productInfo";
import { getSingleProduct } from "@/app/lib/actions";
import { ProductType } from "@/app/lib/types";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductDetailPage = async ({
  params,
}: {
  params: { urlName: string };
}) => {
  const product: ProductType = await getSingleProduct(params.urlName);
  const price: number =
    product.discountPercentage !== 0
      ? product.basePrice * (1 - product.discountPercentage / 100)
      : product.basePrice;
  console.log(product.categories);

  return (
    <>
      <Link href="/product" className="flex text-violet-700">
        <ArrowLeftIcon />
        <p className="font-semibold">Back</p>
      </Link>
      <ProductInfo product={product} price={price} />
    </>
  );
};

export default ProductDetailPage;
