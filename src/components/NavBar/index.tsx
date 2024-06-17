import React from "react";

import { LogoutButton } from "../LogoutButton";
import { getCurrentSession } from "@/helpers/getSession";
import Link from "next/link";
import { Login } from "../Icons";

export const NavBar = async () => {
  const session = await getCurrentSession();

  return (
    <div className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-6">
          <li>
            <a>Loja</a>
          </li>
          <li>
            <details>
              <summary>Admin</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Usuários</a>
                </li>
                <li>
                  <a>Categorias</a>
                </li>
                <li>
                  <a>Produtos</a>
                </li>
                <li>
                  <a>Pedidos</a>
                </li>
                <li>
                  <a>Endereços</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            {session ? (
              <LogoutButton />
            ) : (
              <Link className="btn btn-primary" href="/login">
                <Login />
                Entrar
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
