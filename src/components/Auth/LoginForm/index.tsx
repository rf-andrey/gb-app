"use client";

import React, { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Key, User } from "@/components/Icons";

export const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);

      return;
    }

    router.replace("/");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <User />
        <input
          type="text"
          name="user"
          className="grow"
          placeholder="Usuário"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <Key />
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
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
