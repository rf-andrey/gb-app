import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  path: string;
}

export const TextCard = ({ title, description, path }: Props) => (
  <Link href={path} className="btn btn-neutral h-full">
    <div className="card w-64 shadow-xl">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p>{description}</p>}
      </div>
    </div>
  </Link>
);
