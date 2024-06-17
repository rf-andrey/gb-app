import React from "react";
import { redirect } from "next/navigation";

import { deleteUser, getUserById, updateUser } from "@/api/users";
import { UserForm } from "@/components/Form";
import { FormCard } from "@/components/FormCard";
import { getConfig } from "@/helpers/getSession";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditUser({ params: { id } }: Props) {
  const config = await getConfig();

  const response = await getUserById(id, config);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    await updateUser(id, rawFormData, config);

    redirect("/admin/usuarios");
  };

  const handleDelete = async () => {
    "use server";
    await deleteUser(id, config);

    redirect("/admin/usuarios");
  };

  return (
    <div>
      <FormCard>
        <h2>Editar usuário</h2>
        <UserForm
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          data={response?.data}
        />
      </FormCard>
    </div>
  );
}
