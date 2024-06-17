"use server";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getCurrentSession() {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    return session;
  }
  return;
}

export async function getConfig() {
  const accessToken = await getCurrentSession().then(
    (res) => res?.user?.accessToken
  );

  return {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
}
