"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Definimos el tipo del contexto
interface PuntajeContextType {
  puntaje: number;
  incrementarPuntaje: () => void;
}

// Creamos el contexto con valor inicial dummy (lo sobrescribiremos con el provider)
const PuntajeContext = createContext<PuntajeContextType>({
  puntaje: 0,
  incrementarPuntaje: () => {},
});

// Hook para acceder al contexto
export function usePuntajeGlobal() {
  return useContext(PuntajeContext);
}

// Provider con typing en children
export function ProveedorPuntaje({ children }: { children: ReactNode }) {
  const [puntaje, setPuntaje] = useState<number>(0);

  const incrementarPuntaje = () => setPuntaje(prev => prev + 10);

  return (
    <PuntajeContext.Provider value={{ puntaje, incrementarPuntaje }}>
      {children}
    </PuntajeContext.Provider>
  );
}

// Componente para mostrar el puntaje
export function PuntajeTotal() {
  const { puntaje } = usePuntajeGlobal();

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
      Puntaje: {puntaje}
    </p>
  );
}
