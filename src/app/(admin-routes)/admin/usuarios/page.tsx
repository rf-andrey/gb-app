import React from "react";

import { Table } from "@/components/Table";
import { getUsers } from "@/api/users";
import { getConfig } from "@/helpers/getSession";

export default async function Users() {
  const config = await getConfig();
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
