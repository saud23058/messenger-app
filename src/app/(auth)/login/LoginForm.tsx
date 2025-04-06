"use client";
import SocialButton from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginFormType, loginSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
    <div className="w-80 h-max p-6 flex flex-col gap-4  bg-gray-100 rounded-md">
      <form
        className="flex flex-col font-bold gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
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
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <Button className="p-6 font-bold  " disabled={isSubmitting}>
          Login
        </Button>
      </form>
      <div className="flex items-center gap-1">
        <div className="flex-grow bg-gray-500 border-t-2" />

        <span>Or continue with</span>
        <div className="flex-grow bg-gray-500 border-t-2" />
      </div>
      <SocialButton />
      <p className="text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-500" href={"/sign-up"}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
