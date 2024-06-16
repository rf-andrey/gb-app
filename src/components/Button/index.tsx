import React, { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => (
  <button className="btn btn-primary">{children}</button>
);
