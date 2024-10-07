import { PRODUCT_BASE_URL, SEARCH_BASE_URL } from "@/config";
import { NextResponse } from "next/server";
import { basicFetch } from "../fetchFunction";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");
  const offset = searchParams.get("offset");
  const query = searchParams.get("query");

  const endpoint = query
    ? `${SEARCH_BASE_URL}${query}&page=${page}&offset=${offset}`
    : `${PRODUCT_BASE_URL}?page=${page}&offset=${offset}`;

  const list = await basicFetch(endpoint);
  return NextResponse.json(list);
}
