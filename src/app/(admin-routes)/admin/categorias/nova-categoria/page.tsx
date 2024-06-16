import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { CategoryForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import { createCategory } from "@/api/categories";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditCategory({ params: { id } }: Props) {
  const session = await getServerSession(nextAuthOptions);

  const config = {
    headers: { Authorization: `Bearer ${session?.user.accessToken}` },
  };

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
