

import React from "react";
import { SiImessage } from "react-icons/si";

const Home = () => {
  return (
    <main className="flex flex-col w-full min-h-screen justify-center py-12 items-center">
      <SiImessage className="text-[120px] text-blue-600"  />
      <h1 className="text-4xl font-bold my-6 tracking-tight">Sign in to your account</h1>
      
    </main>
  );
};

export default Home;
