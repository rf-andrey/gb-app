import React from "react";
import { redirect } from "next/navigation";

import { ProductForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import { deleteProduct, getProductById, updateProduct } from "@/api/products";
import { getConfig } from "@/helpers/getSession";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditProduct({ params: { id } }: Props) {
  const config = await getConfig();

  const response = await getProductById(id, config);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    await updateProduct(id, rawFormData, config);

    redirect("/admin/produtos");
  };

  const handleDelete = async () => {
    "use server";
    await deleteProduct(id, config);

    redirect("/admin/produtos");
  };

  return (
    <div>
      <FormCard>
        <h2>Editar produto</h2>
        <ProductForm
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          data={response?.data}
          isUpdate
        />
      </FormCard>
    </div>
  );
}
