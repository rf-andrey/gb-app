"use client";

import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Props {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUpForm = ({ setIsSignUp }: Props) => {
  const handleSubmit = async (formData: FormData) => {
    toast.loading("Cadastrando...");
    const rawFormData = Object.fromEntries(formData);

    try {
      await axios.post("http://localhost:3333/api/users/", rawFormData);

      toast.dismiss();
      toast.success("Usuário cadastrado!");

      setIsSignUp(false);
    } catch (err) {
      toast.dismiss();
      toast.error("Erro no cadastro.");
      console.error(err);
    }
  };

  return (
    <form className="flex flex-col gap-3" action={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="username"
          className="grow"
          placeholder="Usuário"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" name="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Senha"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="name"
          className="grow"
          placeholder="Nome completo"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" name="cpf" className="grow" placeholder="CPF" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="telephone"
          className="grow"
          placeholder="Telefone"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="date"
          name="birthDate"
          className="grow"
          placeholder="Data de nascimento"
        />
      </label>
      <div className="card-actions justify-center">
        <button className="btn btn-primary px-10" type="submit">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
