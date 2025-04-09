import React from "react";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const SocialButton = () => {
  return (
    <Button
      onClick={() => {
        signIn("google", redirect("/user")).then((e) => {
          if (e?.error) {
            toast.error("Invalid credentials");
          }
          if (e?.ok && !e.error) {
            toast.success("Successfully logged in");
          }
        });
      }}
      className="p-6 font-bold"
    >
      <FaGoogle /> Continue with google
    </Button>
  );
};

export default SocialButton;
