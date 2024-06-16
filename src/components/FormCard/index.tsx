import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FormCard = ({ children }: Props) => (
  <div className="card w-120 bg-base-100 shadow-xl">
    <div className="card-body items-center text-center gap-4 w-120">
      {children}
    </div>
  </div>
);
