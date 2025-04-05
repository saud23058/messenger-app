"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginFormType, loginSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    //setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <div className="w-80 h-max p-6 flex flex-col gap-4 font-bold bg-gray-100 rounded-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button className="p-6" disabled={isSubmitting}>
          Login
        </Button>
      </form>
      <div className="flex items-center gap-1">
        <div className="flex-grow bg-gray-500 border-t-2" />

        <span>Or continue with</span>
        <div className="flex-grow bg-gray-500 border-t-2" />
      </div>
    </div>
  );
};

export default LoginForm;
