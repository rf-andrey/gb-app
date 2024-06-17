"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logout } from "../Icons";

export const LogoutButton = () => {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/login");
  }
  return (
    <button className="btn btn-outline" onClick={logout}>
      <Logout />
      Sair
    </button>
  );
};
