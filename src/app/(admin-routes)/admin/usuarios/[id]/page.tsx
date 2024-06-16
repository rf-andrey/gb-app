import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { deleteUser, getUserById, updateUser } from "@/api/users";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Form } from "@/components/Form";
import { FormCard } from "@/components/FormCard";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditUser({ params: { id } }: Props) {
  const session = await getServerSession(nextAuthOptions);

  const config = {
    headers: { Authorization: `Bearer ${session?.user.accessToken}` },
  };

  const response = await getUserById(id, config);

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = Object.fromEntries(formData);

    await updateUser(id, rawFormData, config);
  };

  const handleDelete = async () => {
    "use server";
    await deleteUser(id, config, () => redirect("/admin/usuarios"));
  };

  return (
    <div>
      <FormCard>
        <h2>Editar usuário</h2>
        <Form
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          data={response?.data}
        />
      </FormCard>
    </div>
  );
}
