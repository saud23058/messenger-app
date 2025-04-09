"use client"
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const Users = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  );
};

export default Users;
