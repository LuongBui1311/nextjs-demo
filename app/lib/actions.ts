"use server";

import { LOCAL_API, LOGOUT_BASE_URL, PRODUCT_BASE_URL } from "@/config";

export async function getSingleProduct(urlName: string) {
  const res = await fetch(`${PRODUCT_BASE_URL}/${urlName}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProduct(query: string, page: number, offset: number) {
  const res = await fetch(
    `${LOCAL_API}api/product?query=${query}&page=${page}&offset=${offset}`,
    { method: "GET", cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }
  const result = await res.json();
  return result;
}

export async function getUser(accessToken: string) {
  const res = await fetch(
    `${LOCAL_API}api/user?accessToken=${accessToken}`,
    { method: "GET", cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }
  const result = await res.json();
  console.log(result);
  return result;
}

export async function loggingOut(accessToken: string, refreshToken: string | null) {
  const res = await fetch(LOGOUT_BASE_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
  if (!res.ok) {
      throw new Error('Logging out failed');
  }
}
