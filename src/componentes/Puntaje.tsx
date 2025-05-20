"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const PuntajeContext = createContext({
  puntaje: 0,
  incrementarPuntaje: () => {},
});

export function usePuntajeGlobal() {
  return useContext(PuntajeContext);
}

export function ProveedorPuntaje({ children }: { children: ReactNode }) {
  const [puntaje, setPuntaje] = useState(0);

  const incrementarPuntaje = () => {
    setPuntaje((prev) => prev + 10);
  };

  return (
    <PuntajeContext.Provider value={{ puntaje, incrementarPuntaje }}>
      {children}
    </PuntajeContext.Provider>
  );
}

export function PuntajeTotal() {
  const { puntaje } = usePuntajeGlobal();

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
      {puntaje}
    </p>
  );
}
