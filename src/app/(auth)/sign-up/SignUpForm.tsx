import SocialButton from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignUpFormType, signUpSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    //setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    mode: "onTouched",
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
  };

  return (
    <div className="w-80 h-max p-6 flex flex-col gap-4  bg-gray-100 rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col font-bold gap-4"
      >
        <div>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
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
        <Button className="p-6 font-bold" disabled={isSubmitting}>
          Register
        </Button>
      </form>
      <div className="flex items-center gap-1">
        <div className="flex-grow bg-gray-500 border-t-2" />

        <span>Or continue with</span>
        <div className="flex-grow bg-gray-500 border-t-2" />
      </div>
      <SocialButton />
      <p className="text-sm text-gray-600">
        Already have an Account?{" "}
        <Link className="text-blue-500" href={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
