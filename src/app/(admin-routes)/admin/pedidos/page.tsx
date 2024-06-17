import React from "react";

import { Table } from "@/components/Table";
import { getOrders } from "@/api/orders";
import { getConfig } from "@/helpers/getSession";
import { Checkbox } from "@/components/Checkbox";

export default async function Users() {
  const config = await getConfig();
  const response = await getOrders(config);

  const orders =
    response?.data?.map((el) => ({
      ...el,
      orderDate: new Date(el.orderDate).toLocaleDateString("pt-BR"),
      user: el.user.email,
      status: <Checkbox checked={el.status} />,
    })) ?? [];

  const headers = [
    "ID",
    "Número do pedido",
    "Data do pedido",
    "Total",
    "Cliente",
    "Status",
  ];

  return (
    <div className="flex flex-col gap-2 items-end">
      <Table headers={headers} data={orders} blockEdit />
    </div>
  );
}
