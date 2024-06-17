"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Dashboard, Shopping } from "@/components/Icons";
import { SideImageTitleCard } from "@/components/SideImageTitleCard";

export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <main className="flex flex-col justify-center gap-6 items-center">
      <h2>Olá{session && `, ${session.user.name}`}!</h2>
      <p>O que deseja fazer?</p>
      <div className="flex gap-12 justify-stretch">
        <Link className="btn btn-neutral h-full" href="/admin">
          <SideImageTitleCard image={<Dashboard />} text="Dashboard" />
        </Link>
        <Link className="btn btn-neutral h-full" href="/loja">
          <SideImageTitleCard image={<Shopping />} text="Loja" />
        </Link>
      </div>
    </main>
  );
}
