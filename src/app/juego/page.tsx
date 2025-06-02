"use client";

import { Dashboard } from "@/componentes/Dashboard";
import { GrupoTarjetas } from "@/componentes/GrupoTarjetas";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <h1 className="text-2xl font-bold text-center mb-6">Memory</h1>
      <GrupoTarjetas />
      <Dashboard />
    </main>
  );
}




