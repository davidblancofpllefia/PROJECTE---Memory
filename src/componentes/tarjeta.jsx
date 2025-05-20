'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContadorGlobal } from "@/componentes/Contador";
import { useState } from "react";
import { usePuntajeGlobal } from "@/componentes/Puntaje";

let cartasGiradas = [];
let totalEmparejadas = 0;

export function Tarjeta({ nombre, imagen }) {
  const [contadorLocal, setContadorLocal] = useState(0);
  const { incrementarGlobal } = useContadorGlobal();
  const [girada, setGirada] = useState(false);
  const [emparejada, setEmparejada] = useState(false);
  const { incrementarPuntaje, puntaje } = usePuntajeGlobal();

  const handleClick = () => {
    if (girada || emparejada) return;

    setContadorLocal(contadorLocal + 1);
    incrementarGlobal();
    setGirada(true);

    cartasGiradas.push({ nombre, setGirada });

    if (cartasGiradas.length === 2) {
      const [carta1, carta2] = cartasGiradas;
      if (carta1.nombre === carta2.nombre) {
        setEmparejada(true);
        carta1.setGirada(true);
        carta2.setGirada(true);
        cartasGiradas = [];
        totalEmparejadas++;
        incrementarPuntaje();

        if (totalEmparejadas === 6) {
          alert(`¡Ganaste! Tu puntaje es: ${puntaje + 10}`);
          window.location.reload();
        }
      } else {
        setTimeout(() => {
          carta1.setGirada(false);
          carta2.setGirada(false);
          cartasGiradas = [];
        }, 500);
      }
    }
  };

  return (
<Card
  className="w-28 shadow-lg hover:scale-105 transition-transform cursor-pointer"
  onClick={handleClick}
>
  <CardHeader>
    {girada || emparejada ? (
      <img src={imagen} className="w-full h-20 rounded" />
    ) : (
      <div className="w-full h-20 rounded flex items-center justify-center text-xl font-bold text-white">
        <img
          src="https://images.seeklogo.com/logo-png/8/2/marvel-comics-logo-png_seeklogo-88891.png"
          alt=""
          className="max-h-full"
        />
      </div>
    )}
  </CardHeader>
  <CardContent>
    <CardTitle className="text-center text-xs">{girada || emparejada ? nombre : "???"}</CardTitle>
    <p className="text-[10px] text-center">Clicks: {contadorLocal}</p>
  </CardContent>
</Card>


  );
}
