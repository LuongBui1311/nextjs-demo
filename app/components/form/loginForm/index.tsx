"use client";

import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../input/formInput";
import { loginSchema } from "@/app/lib/schemas";
import { LoginType } from "@/app/lib/types";
import { LOGIN_BASE_URL } from "@/config";
import { PRODUCT } from "@/app/lib/constants";

const LoginForm = () => {
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    const postData: LoginType = {
      email: data.email,
      password: data.password,
    };
    const res = await fetch(LOGIN_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...postData }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message);
    } else {
      sessionStorage.setItem('accessToken', result.accessToken);
      sessionStorage.setItem('refreshToken', result.refreshToken);
      window.location.href = PRODUCT;
    }
  };
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              hint="Please provide you email..."
            />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-violet-700 text-base md:text-lg hover:bg-violet-800"
          >
            Login
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
