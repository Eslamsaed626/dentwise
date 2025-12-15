import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <SignUpButton></SignUpButton>
    </div>
  );
};

export default Home;
