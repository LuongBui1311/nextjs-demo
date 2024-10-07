import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInputProps } from "@/app/lib/props";
import React from "react";

const FormInput = ({
  control,
  name,
  label,
  hint,
  type = "text",
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-base md:text-lg text-violet-950">{label}</FormLabel>
          <FormControl>
            <Input
              className="text-base md:text-lg"
              placeholder={hint}
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
