"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }
  return (
    <button className="btn btn-neutral" onClick={logout}>
      Sair
    </button>
  );
};
