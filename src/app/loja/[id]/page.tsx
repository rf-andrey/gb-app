import { getCategories, getCategoryById } from "@/api/categories";
import { StoreCard } from "@/components/StoreCard";
import { TextCard } from "@/components/atoms/TextCard";
import { getConfig } from "@/helpers/getSession";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function CategoryDetails({ params: { id } }: Props) {
  const config = await getConfig();
  const response = await getCategoryById(id, config);
  const category = response?.data;

  return (
    <main className="flex flex-col justify-center gap-6 items-center">
      <h2>{category?.name}</h2>
      <p>{category?.description}</p>
      <div className="flex gap-12 w-248 flex-wrap justify-between">
        {category?.product.map((el) => (
          <StoreCard
            key={el.name}
            name={el.name}
            price={el.price}
            image={el.image}
            path={`../loja/${id}/${el.id}`}
          />
        ))}
      </div>
    </main>
  );
}
