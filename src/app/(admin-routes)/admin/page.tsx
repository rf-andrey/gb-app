import { getServerSession } from "next-auth";
import React from "react";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main className="flex flex-col justify-center gap-6">
      <h1>Olá, {session?.user?.name}</h1>
    </main>
  );
}
