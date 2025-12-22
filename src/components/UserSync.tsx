"use client";

import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const UserSync = () => {
  const { isSignedIn, isLoaded } = useUser();
  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          const user = await syncUser();
          //   console.log(user);
        } catch (error) {
          console.log("faild to sync user ", error);
        }
      }
    };
    handleUserSync();
  }, [isLoaded, isSignedIn]);
  return null;
};

export default UserSync;
