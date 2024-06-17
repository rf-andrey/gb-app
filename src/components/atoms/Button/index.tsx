"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled: boolean;
  handleClick: () => void;
}

export const PrimaryButton = ({ children, handleClick, disabled }: Props) => (
  <button
    disabled={disabled}
    onClick={async () => handleClick()}
    className="btn btn-primary"
  >
    {children}
  </button>
);
