"use client";

import { Category } from "@/types/api/categories";
import React, { useReducer } from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";

interface Props {
  handleSubmit: (formData: FormData) => void;
  handleDelete?: () => void;
  data?: Category;
  isUpdate?: boolean;
}

enum ActionType {
  UPDATE = "updateFieldValue",
}

interface UpdateAction {
  type: ActionType;
  field: string;
  value: any;
}

const EMPTY_STATE: Category = {
  id: 0,
  name: "",
  description: "",
};

export default function CategoryForm({
  handleSubmit,
  handleDelete,
  data,
  isUpdate,
}: Props) {
  const reducer = (state: Category, action: UpdateAction): Category => {
    switch (action.type) {
      case "updateFieldValue":
        return { ...state, [action.field]: action.value };

      default:
        return data ?? EMPTY_STATE;
    }
  };

  const [state, dispatch] = useReducer(reducer, data ?? EMPTY_STATE);

  const updateFieldValue =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type: ActionType.UPDATE, field, value: event.target.value });
    };

  return (
    <form className="flex flex-col gap-3 w-full" action={handleSubmit}>
      <FormInput
        name="name"
        placeholder="Nome da categoria"
        value={state.name}
        onChange={updateFieldValue("name")}
      />
      <FormTextArea
        name="description"
        placeholder="Descrição"
        value={state.description}
        onChange={updateFieldValue("description")}
      />
      <div className="card-actions flex-col items-center w-48 self-center">
        <button className="btn btn-primary px-10 w-full" type="submit">
          {isUpdate ? "Atualizar" : "Criar"}
        </button>
        {handleDelete && (
          <button
            type="button"
            className="btn btn-outline btn-error w-full"
            onClick={async () => handleDelete()}
          >
            Excluir categoria
          </button>
        )}
      </div>
    </form>
  );
}
