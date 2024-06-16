import React from "react";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "../../../api/auth/[...nextauth]/route";
import { Table } from "@/components/Table";
import { getUsers } from "@/api/users";

export default async function Users() {
  const session = await getServerSession(nextAuthOptions);

  const config = {
    headers: { Authorization: `Bearer ${session?.user.accessToken}` },
  };
  const response = await getUsers(config);

  const headers = [
    "Nome",
    "Email",
    "Username",
    "Telefone",
    "CPF",
    "Data de nascimento",
  ];

  return <Table headers={headers} data={response?.data} isUserVariant />;
}
