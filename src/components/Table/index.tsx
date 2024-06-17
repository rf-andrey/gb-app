import React from "react";

import { Row } from "./Row";
import { DataType } from "@/types/api/shared";

interface Props {
  headers: string[];
  isUserVariant?: boolean;
  data: DataType[] | undefined;
  blockEdit?: boolean;
}

export const Table = ({ headers, data, isUserVariant, blockEdit }: Props) => {
  return (
    <div className="overflow-x-auto bg-base-300 h-120">
      <table className="table table-zebra table-pin-rows table-lg">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            {!blockEdit && <th></th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((row: DataType) => (
            <Row
              key={row.id}
              row={row}
              isUserVariant={isUserVariant}
              blockEdit={blockEdit}
            />
          )) ?? "Nenhum dado."}
        </tbody>
      </table>
    </div>
  );
};
