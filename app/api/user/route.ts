import { USER_BASE_URL } from "@/config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
  
    const accessToken = searchParams.get("accessToken");
  
    const res = await fetch(USER_BASE_URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        cache: 'no-store'
      });
    const result = await res.json();
    return NextResponse.json(result);
  }