"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const LoginButton = () => {
  const router = useRouter();

  return (
    <Button
      className="font-serif bg-violet-700 text-white text-xs px-3 py-1 md:text-base md:px-4 md:py-2 font-semibold rounded-xl hover:bg-violet-800"
      onClick={() => router.push("/login")}
    >
      Login
    </Button>
  );
};

export default LoginButton;
