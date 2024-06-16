import React from "react";
import { LoginForm } from "./LoginForm";

export const AuthCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center gap-4">
        <h2 className="card-title">Olá!</h2>
        <p>Para continuar, por favor, faça login:</p>
        <LoginForm />
      </div>
    </div>
  );
};
