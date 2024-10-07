"use client";

import ProductCard from "@/app/components/card";
import SearchInput from "@/app/components/input/searchInput";
import CustomSelect from "@/app/components/select";
import { getProduct } from "@/app/lib/actions";
import { PRODUCT_DETAIL } from "@/app/lib/constants";
import { ProductType } from "@/app/lib/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ProductPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [quantity, setQuantity] = useState<number>(6);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [hasMore, setHasMore] = useState(true);

  const populateList = (
    productList: ProductType[],
    query: string,
    page: number,
    quantity: number
  ) => {
    getProduct(query, page, quantity).then((data: ProductType[]) => {
      if (data.length === 0) {
        setHasMore(false);
      }
      setProductList([...productList, ...data]);
      setLoading(false);
    });
  };

  const elementRef = useRef(null);

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      populateList(productList, query, page + 1, quantity);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    populateList([], query, 1, quantity);
    setPage(1);
    setHasMore(true);
  }, [quantity, query]);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [productList.length]);
  return (
    <>
      <h1 className="text-4xl font-serif text-violet-700 font-bold">
        Product List
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <CustomSelect setQuantity={setQuantity} />
        <SearchInput setQuery={setQuery} />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {productList.map((product: ProductType) => (
          <Link key={product.id} href={`${PRODUCT_DETAIL}/${product.urlName}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      {hasMore && (
        <div
          ref={elementRef}
          className="text-center text-violet-700 font-semibold mb-10"
        >
          Loading Product...
        </div>
      )}
      {!hasMore && productList.length !== 0 && (
        <div className="text-center text-violet-700 font-semibold mb-10">
          You have reached the end of the list!
        </div>
      )}
      {productList.length === 0 && !loading && (
        <p className="text-center text-violet-700 font-semibold">
          Sorry we don't have products that you are looking for.
        </p>
      )}
    </>
  );
};

export default ProductPage;
