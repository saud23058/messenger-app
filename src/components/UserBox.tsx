"use client";
import { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

interface props {
  data: User;
}
const UserBox = ({ data }: props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = useCallback(() => {
    setLoading(true);
    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [data, router]);
  return (
    <div>
      <div
        onClick={handleClick}
        className="relative flex items-center bg-white p-3 hover:bg-neutral-100 transition cursor-pointer rounded-lg"
      >
        <div>
          {data.image ? (
            <Image
              fill
              alt="Avatar"
              src={data.image}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 text-5xl flex items-center justify-center bg-neutral-200 rounded-full">
              🧒
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="text-sm font-medium text-gray-900">{data.name}</div>
        <div className="text-sm font-light text-gray-500">{data.email}</div>
      </div>
    </div>
  );
};
export default UserBox;
