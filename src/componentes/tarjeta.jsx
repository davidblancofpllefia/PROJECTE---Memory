"use client";
import { useClickContext } from "@/componentes/Contador";
import { useState } from 'react';

export function Tarjeta({ nombre, imagen }) {
  const { incrementarClicks } = useClickContext();
  const [clicksPropios, setClicksPropios] = useState(0);

  const manejarClick = () => {
    setClicksPropios((c) => c + 1);
    incrementarClicks();
  };

  return (
    <div onClick={manejarClick}>
      <img src={imagen} alt={nombre} />
      <p>{nombre}</p>
      <p>Clicks: {clicksPropios}</p>
    </div>
  );
}

