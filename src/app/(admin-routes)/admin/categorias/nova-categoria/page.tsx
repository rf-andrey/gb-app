import React from "react";
import { redirect } from "next/navigation";

import { CategoryForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import { createCategory } from "@/api/categories";
import { getConfig } from "@/helpers/getSession";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditCategory({ params: { id } }: Props) {
  const config = await getConfig();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    const response = await createCategory(rawFormData, config);
    if (response?.status !== 201) {
      console.log(response?.statusText);
      return;
    }

    redirect("../categorias");
  };

  return (
    <div>
      <FormCard>
        <h2>Adicionar categoria</h2>
        <CategoryForm handleSubmit={handleSubmit} />
      </FormCard>
    </div>
  );
}
