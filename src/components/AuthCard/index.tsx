"use client";

import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const loginLayout = () => (
    <>
      <p>Para continuar, por favor, faça login:</p>
      <LoginForm />
      <p>
        Não possui cadastro?{" "}
        <button onClick={() => setIsSignUp(true)} className="underline">
          Clique aqui
        </button>
      </p>
    </>
  );

  const signUpLayout = () => (
    <>
      <p>Por favor, informe os seguintes dados:</p>
      <SignUpForm />
      <p>
        Já possui cadastro?{" "}
        <button onClick={() => setIsSignUp(false)} className="underline">
          Clique aqui
        </button>
      </p>
    </>
  );

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center gap-4">
        <h2 className="card-title">Olá!</h2>
        {isSignUp ? signUpLayout() : loginLayout()}
      </div>
    </div>
  );
};
