import React from "react";

import { Row } from "./Row";
import { User } from "@/types/api/users";

interface Props {
  headers: string[];
  data: User[] | undefined;
}

export const Table = ({ headers, data }: Props) => {
  return (
    <div className="overflow-x-auto bg-base-300 h-120">
      <table className="table table-zebra table-pin-rows table-lg">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row: User) => <Row key={row.id} row={row} />) ??
            "Nenhum dado."}
        </tbody>
      </table>
    </div>
  );
};
