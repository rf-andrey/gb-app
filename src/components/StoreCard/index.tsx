import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  price: number;
  image: string;
  path: string;
}

export const StoreCard = ({ name, price, image, path }: Props) => (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{`R$ ${price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`}</p>
      <div className="card-actions justify-end">
        <Link href={path} className="btn btn-primary">
          Comprar
        </Link>
      </div>
    </div>
  </div>
);
