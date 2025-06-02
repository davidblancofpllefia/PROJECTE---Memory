// componentes/Contador.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo del contexto
interface ContadorContextType {
  contador: number;
  incrementarGlobal: () => void;
}

// Crea el contexto con valor por defecto undefined
const ContadorContext = createContext<ContadorContextType | undefined>(undefined);

// Provider que envuelve la app o el componente padre
export function ContadorProvider({ children }: { children: ReactNode }) {
  const [contador, setContador] = useState(0);

  const incrementarGlobal = () => {
    setContador((prev) => prev + 1);
  };

  return (
    <ContadorContext.Provider value={{ contador, incrementarGlobal }}>
      {children}
    </ContadorContext.Provider>
  );
}

// Hook para usar el contexto
export function useContadorGlobal() {
  const context = useContext(ContadorContext);
  if (!context) {
    throw new Error("useContadorGlobal debe usarse dentro de un ContadorProvider");
  }
  return context;
}
