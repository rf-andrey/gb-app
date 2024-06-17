import React from "react";
import { redirect } from "next/navigation";

import { ProductForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import { createProduct } from "@/api/products";
import { getConfig } from "@/helpers/getSession";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditProduct({ params: { id } }: Props) {
  const config = await getConfig();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    const response = await createProduct(rawFormData, config);
    if (response?.status !== 201) {
      console.log(response?.statusText);
      return;
    }

    redirect("../produtos");
  };

  return (
    <div>
      <FormCard>
        <h2>Adicionar produto</h2>
        <ProductForm handleSubmit={handleSubmit} />
      </FormCard>
    </div>
  );
}
