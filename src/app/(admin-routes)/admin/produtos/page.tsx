import React from "react";
import Link from "next/link";

import { Table } from "@/components/Table";
import { getProducts } from "@/api/products";
import { getConfig } from "@/helpers/getSession";

export default async function Users() {
  const config = await getConfig();
  const response = await getProducts(config);

  const products =
    response?.data?.map((el) => ({
      ...el,
      category: el.category.name,
    })) ?? [];

  const headers = [
    "ID",
    "Nome",
    "Descrição",
    "Preço",
    "Qtd em estoque",
    "Categoria",
  ];

  return (
    <div className="flex flex-col gap-2 items-end">
      <Link className="btn btn-primary" href="./produtos/novo-produto">
        + Criar novo
      </Link>
      <Table headers={headers} data={products} />
    </div>
  );
}
