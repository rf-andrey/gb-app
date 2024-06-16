import React from "react";
import { Auth } from "@/components/Auth";
import { FormCard } from "@/components/FormCard";

export default function Home() {
  return (
    <main className="">
      <FormCard>
        <h2 className="card-title">Olá!</h2>
        <Auth />
      </FormCard>
    </main>
  );
}
