import React from "react";
import Link from "next/link";

import { Table } from "@/components/Table";
import { getCategories } from "@/api/categories";
import { getConfig } from "@/helpers/getSession";

export default async function Users() {
  const config = await getConfig();
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
