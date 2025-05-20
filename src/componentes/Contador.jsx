"use client";

import { createContext, useContext, useState } from "react";

const ContadorContext = createContext({
  contadorGlobal: 0,
  incrementarGlobal: () => {},
});

export function useContadorGlobal() {
  return useContext(ContadorContext);
}

export function ContadorProvider({ children }) {
  const [contadorGlobal, setContadorGlobal] = useState(0);

  const incrementarGlobal = () => {
    setContadorGlobal((prev) => prev + 1);
  };

  return (
    <ContadorContext.Provider value={{ contadorGlobal, incrementarGlobal }}>
      {children}
    </ContadorContext.Provider>
  );
}

export function TotalClicks() {
  const { contadorGlobal } = useContadorGlobal();

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">
      {contadorGlobal}
    </p>
  );
}



