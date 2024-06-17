"use client";

import { Product } from "@/types/api/products";
import React, { useEffect, useReducer, useState } from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { FormSelect } from "./FormSelect";
import { getCategories } from "@/api/categories";
import {} from "next-auth";
import { getConfig } from "@/helpers/getSession";

interface Props {
  handleSubmit: (formData: FormData) => void;
  handleDelete?: () => void;
  data?: Product;
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

interface Options {
  value: number;
  label: string;
}

type InputTypes = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const EMPTY_STATE: Product = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  stockAmount: 0,
  categoryId: 0,
  image: "",
};

export default function ProductForm({
  handleSubmit,
  handleDelete,
  data,
  isUpdate,
}: Props) {
  const reducer = (state: Product, action: UpdateAction): Product => {
    switch (action.type) {
      case "updateFieldValue":
        return { ...state, [action.field]: action.value };

      default:
        return data ?? EMPTY_STATE;
    }
  };

  const [state, dispatch] = useReducer(reducer, data ?? EMPTY_STATE);
  const [categories, setCategories] = useState<Options[]>([]);

  const updateFieldValue =
    (field: string) => (event: React.ChangeEvent<InputTypes>) => {
      dispatch({ type: ActionType.UPDATE, field, value: event.target.value });
    };

  const fetchCategories = async () => {
    const config = await getConfig();

    const categoryList = await getCategories(config);

    return categoryList;
  };

  useEffect(() => {
    fetchCategories().then((res) => {
      if (res?.data && res?.data.length > 0) {
        const options = res?.data.map((el) => ({
          value: el.id,
          label: el.name,
        }));
        setCategories(options);
      }
    });
  }, []);

  return (
    <form className="flex flex-col gap-3 w-full" action={handleSubmit}>
      <FormInput
        name="name"
        placeholder="Nome do produto"
        value={state.name}
        onChange={updateFieldValue("name")}
      />
      <FormTextArea
        name="description"
        placeholder="Descrição"
        value={state.description}
        onChange={updateFieldValue("description")}
      />
      <FormInput
        label="Preço"
        name="price"
        placeholder="Preço"
        value={state.price}
        onChange={updateFieldValue("price")}
      />
      <FormInput
        label="Qtd. em estoque"
        name="stockAmount"
        placeholder="Qtd. em estoque"
        value={state.stockAmount}
        onChange={updateFieldValue("stockAmount")}
      />
      <FormSelect
        name="categoryId"
        placeholder="Selecione a categoria"
        options={categories}
        value={state.categoryId}
        onChange={updateFieldValue("categoryId")}
      />
      <FormInput
        name="image"
        placeholder="Imagem"
        value={state.image}
        onChange={updateFieldValue("image")}
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
            Excluir produto
          </button>
        )}
      </div>
    </form>
  );
}
