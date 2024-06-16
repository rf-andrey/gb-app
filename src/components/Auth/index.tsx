"use client";

import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export const Auth = () => {
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
      <SignUpForm setIsSignUp={setIsSignUp} />
      <p>
        Já possui cadastro?{" "}
        <button onClick={() => setIsSignUp(false)} className="underline">
          Clique aqui
        </button>
      </p>
    </>
  );

  return isSignUp ? signUpLayout() : loginLayout();
};
