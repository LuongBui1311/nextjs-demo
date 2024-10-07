import LoginForm from "@/app/components/form/loginForm";
import { REGISTER } from "@/app/lib/constants";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex mt-8 md:mt-10 xl:mt-40 md:items-center md:justify-center py-12">
      <div className="mx-7 md:mx-auto grid md:w-10/12 xl:w-8/12 gap-6">
        <div className="grid gap-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-violet-700">Login</h1>
          <p className="text-base italic md:text-lg text-balance text-violet-950">
            Enter your email below to login to your account
          </p>
        </div>
        <LoginForm />
        <div className="mt-4 text-center text-sm md:text-base text-violet-950">
          Don&apos;t have an account?{" "}
          <Link href={REGISTER} className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
