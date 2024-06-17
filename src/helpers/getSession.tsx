"use server";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getCurrentUser() {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    return session?.user;
  }
  return;
}

export async function getConfig() {
  const accessToken = await getCurrentUser().then((res) => res?.accessToken);

  return {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
}
