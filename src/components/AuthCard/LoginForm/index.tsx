import React from "react";

import { Mail, Key } from "@/components/Icons";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <label className="input input-bordered flex items-center gap-2">
        <Mail />
        <input type="text" name="user" className="grow" placeholder="Usuário" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Key />
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Senha"
        />
      </label>
      <div className="card-actions justify-center">
        <button className="btn btn-primary px-10" type="submit">
          Entrar
        </button>
      </div>
    </form>
  );
};
