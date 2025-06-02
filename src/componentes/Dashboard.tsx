// componentes/Dashboard.tsx
"use client";

import { useContadorGlobal } from "@/componentes/Contador";
import { usePuntajeGlobal } from "@/componentes/Puntaje";

export function Dashboard() {
  const { contador } = useContadorGlobal();
  const { puntaje } = usePuntajeGlobal();

  return (
    <div className="p-4 bg-gray-800 text-white flex justify-around font-bold">
      <div>Clics: {contador}</div>
      <div>Puntaje: {puntaje}</div>
    </div>
  );
}

