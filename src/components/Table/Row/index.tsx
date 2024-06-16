"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { User } from "@/types/api/users";

interface Props {
  row: User;
}

export const Row = ({ row }: Props) => {
  const pathname = usePathname();

  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{row.name}</div>
          {row.address.length > 0 && (
            <div className="text-sm opacity-50">{`${row.address[0].city}, ${row.address[0].uf}`}</div>
          )}
        </div>
      </td>
      <td>{row.email}</td>
      <td>{row.username}</td>
      <td>{row.telephone}</td>
      <td>{row.cpf}</td>
      <td>
        {new Date(row.birthDate).toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        })}
      </td>
      <th>
        <Link
          className="btn btn-ghost btn-xs"
          href={`../${pathname}/${row.id}`}
        >
          editar
        </Link>
      </th>
    </tr>
  );
};
