"use client";

import { UserCore } from "@/types/api/users";
import React, { useReducer } from "react";
import { FormInput } from "./FormInput";

interface Props {
  handleSubmit: (formData: FormData) => void;
  handleDelete: () => void;
  data?: UserCore;
}

enum ActionType {
  UPDATE = "updateFieldValue",
}

interface UserState extends UserCore {
  password: string;
}

interface UpdateAction {
  type: ActionType;
  field: string;
  value: any;
}

const EMPTY_STATE: UserState = {
  email: "",
  name: "",
  id: 0,
  password: "",
  cpf: "",
  telephone: "",
  birthDate: "",
  username: "",
};

export default function UserForm({ handleSubmit, handleDelete, data }: Props) {
  const reducer = (state: UserState, action: UpdateAction): UserState => {
    switch (action.type) {
      case "updateFieldValue":
        return { ...state, [action.field]: action.value };

      default:
        return data ? { password: "", ...data } : EMPTY_STATE;
    }
  };

  const [state, dispatch] = useReducer(
    reducer,
    data ? { ...data, password: "" } : EMPTY_STATE
  );

  const updateFieldValue =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: ActionType.UPDATE, field, value: event.target.value });
    };

  return (
    <form className="flex flex-col gap-3 w-full" action={handleSubmit}>
      <FormInput
        name="name"
        placeholder="Nome completo"
        value={state.name}
        onChange={updateFieldValue("name")}
      />
      <FormInput
        name="username"
        placeholder="Usuário"
        value={state.username}
        onChange={updateFieldValue("username")}
      />
      <FormInput
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={updateFieldValue("email")}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Senha"
        value={state.password}
        onChange={updateFieldValue("password")}
      />
      <FormInput
        name="cpf"
        placeholder="CPF"
        value={state.cpf}
        onChange={updateFieldValue("cpf")}
      />
      <FormInput
        name="telephone"
        placeholder="Telefone"
        value={state.telephone}
        onChange={updateFieldValue("telephone")}
      />
      <FormInput
        name="birthDate"
        type="date"
        placeholder="Data de nascimento"
        value={state.birthDate}
        disabled
      />
      <div className="card-actions flex-col items-center w-48 self-center">
        <button className="btn btn-primary px-10 w-full" type="submit">
          Atualizar
        </button>
        <button
          type="button"
          className="btn btn-outline btn-error w-full"
          onClick={async () => handleDelete()}
        >
          Excluir usuário
        </button>
      </div>
    </form>
  );
}
