"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../../input/formInput";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/app/lib/schemas";
import { RegisterType } from "@/app/lib/types";
import { USER_BASE_URL } from "@/config";
import { FormInputData } from "./inputData";
import { LOGIN } from "@/app/lib/constants";

const RegisterForm = () => {
  const form = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const register = async (postData: RegisterType) => {
    const res = await fetch(USER_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...postData }),
    });

    if (!res.ok) {
      const result = await res.json();
      alert(result.message);
    } else {
      window.location.href = LOGIN;
    }
  };

  const onSubmit = async (data: RegisterType) => {
    const postData: RegisterType = {
      email: data.email,
      password: data.password,
      name: data.name,
      address: data.address,
    };
    register(postData);
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4"
          noValidate
        >
          <div className="grid gap-2">
            {FormInputData.map((data) => (
              <FormInput
              control={form.control}
              name={data.name}
              label={data.label}
              hint={data.hint}
              type={data.type}
            />
            ))}
          </div>
          <Button
            type="submit"
            className="w-full bg-violet-700 text-base md:text-lg hover:bg-violet-800"
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
