import React from "react";
import { redirect } from "next/navigation";

import { CategoryForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import {
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "@/api/categories";
import { getConfig } from "@/helpers/getSession";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditCategory({ params: { id } }: Props) {
  const config = await getConfig();

  const response = await getCategoryById(id, config);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    await updateCategory(id, rawFormData, config);
  };

  const handleDelete = async () => {
    "use server";
    await deleteCategory(id, config, () => redirect("/admin/categorias"));
  };

  return (
    <div>
      <FormCard>
        <h2>Editar categoria</h2>
        <CategoryForm
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          data={response?.data}
        />
      </FormCard>
    </div>
  );
}
