import { getCategories } from "@/api/categories";
import { TextCard } from "@/components/TextCard";
import { getConfig } from "@/helpers/getSession";
import React from "react";

export default async function Store() {
  const config = await getConfig();
  const response = await getCategories(config);

  return (
    <main className="flex flex-col justify-center gap-6 items-center">
      <h2>Boas vindas!</h2>
      <p>O que você está procurando?</p>
      <div className="flex gap-12 w-248 flex-wrap justify-between">
        {response?.data.map(({ name, id }) => (
          <TextCard title={name} path={`../loja/${id}`} />
        ))}
      </div>
    </main>
  );
}
