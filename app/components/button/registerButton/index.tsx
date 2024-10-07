"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className="font-serif border border-violet-700 text-violet-700 text-xs px-3 py-1 md:text-base md:px-4 md:py-2 font-semibold rounded-xl"
      onClick={() => router.push("/register")}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
