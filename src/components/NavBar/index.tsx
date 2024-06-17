import React from "react";

import { LogoutButton } from "../atoms/LogoutButton";
import { getCurrentSession } from "@/helpers/getSession";
import Link from "next/link";
import { Login } from "../Icons";

export const NavBar = async () => {
  const session = await getCurrentSession();

  return (
    <div className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          GB App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center gap-6">
          <li>
            <Link href="/loja">Loja</Link>
          </li>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 bg-base-100 rounded-t-none z-10">
                <li>
                  <Link href="/admin/usuarios">Usuários</Link>
                </li>
                <li>
                  <Link href="/admin/categorias">Categorias</Link>
                </li>
                <li>
                  <Link href="/admin/produtos">Produtos</Link>
                </li>
                <li>
                  <Link href="/admin/pedidos">Pedidos</Link>
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
