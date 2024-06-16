import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { nextAuthOptions } from "../../../api/auth/[...nextauth]/route";
import { Table } from "@/components/Table";
import { getCategories } from "@/api/categories";

export default async function Users() {
  const session = await getServerSession(nextAuthOptions);

  const config = {
    headers: { Authorization: `Bearer ${session?.user.accessToken}` },
  };
  const response = await getCategories(config);

  const headers = ["ID", "Nome", "Descrição"];

  return (
    <div className="flex flex-col gap-2 items-end">
      <Link className="btn btn-primary" href="./categorias/nova-categoria">
        + Criar nova
      </Link>
      <Table headers={headers} data={response?.data} />
    </div>
  );
}
