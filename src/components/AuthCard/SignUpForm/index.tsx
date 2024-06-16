"use client";

import axios from "axios";
import React from "react";

export const SignUpForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const rawFormData = Object.fromEntries(formData);

    try {
      const user = await axios.post(
        "http://localhost:3333/api/users/",
        rawFormData
      );
      console.log(user);
    } catch (err) {
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
