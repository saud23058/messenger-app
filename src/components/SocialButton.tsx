import React from "react";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";

const SocialButton = () => {
  return (
    <Button className="p-6 font-bold">
      <FaGoogle /> Continue with google
    </Button>
  );
};

export default SocialButton;
