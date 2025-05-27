"use client";

import { useState, useEffect } from "react";
import { Tarjeta } from "./tarjeta";
import { useContadorGlobal, TotalClicks } from "./Contador";
import { usePuntajeGlobal, PuntajeTotal } from "./Puntaje";
import { tarjetaPrueba } from "@/bd/bd";  

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {  
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function GrupoTarjetas() {
  // Duplica las cartas para tener parejas
  const [cartas, setCartas] = useState(() => shuffle([...tarjetaPrueba, ...tarjetaPrueba]));
  const [cartasGiradas, setCartasGiradas] = useState([]);
  const [cartasEmparejadas, setCartasEmparejadas] = useState(new Set());
  const [bloqueo, setBloqueo] = useState(false);
  const [tiempo, setTiempo] = useState(20);

  const { incrementarGlobal } = useContadorGlobal();
  const { incrementarPuntaje } = usePuntajeGlobal();

  useEffect(() => {
    if (tiempo === 0) {
      alert("Se acabó el tiempo");
      window.location.reload();
    }
    const timer = setInterval(() => setTiempo((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [tiempo]);

  useEffect(() => {
    if (cartasEmparejadas.size === cartas.length) {
      alert("¡Ganaste!");
      window.location.reload();
    }
  }, [cartasEmparejadas, cartas.length]);

  const manejarClick = (index) => {
    if (bloqueo) return;
    if (cartasEmparejadas.has(index) || cartasGiradas.includes(index)) return;

    incrementarGlobal();

    if (cartasGiradas.length === 1) {
      const firstIndex = cartasGiradas[0];
      const secondIndex = index;

      setCartasGiradas([firstIndex, secondIndex]);
      setBloqueo(true);

      if (cartas[firstIndex].nombre === cartas[secondIndex].nombre) {
        setTimeout(() => {
          setCartasEmparejadas((prev) => new Set(prev).add(firstIndex).add(secondIndex));
          setCartasGiradas([]);
          incrementarPuntaje();
          setBloqueo(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setCartasGiradas([]);
          setBloqueo(false);
        }, 1000);
      }
    } else {
      setCartasGiradas([index]);
    }
  };

  return (
    <>
      <div className="flex justify-around p-4 bg-gray-800 rounded-md text-white font-bold text-xl mb-4">
        <div>Clicks: <TotalClicks /></div>
        <div>Puntuación: <PuntajeTotal /></div>
        <div>Tiempo: {tiempo}s</div>
      </div>

      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4 justify-items-center">
        {cartas.map((carta, i) => (
          <Tarjeta
            key={i}
            nombre={carta.nombre}
            imagen={carta.imagen}
            girada={cartasGiradas.includes(i) || cartasEmparejadas.has(i)}
            onClick={() => manejarClick(i)}
          />
        ))}
      </section>
    </>
  );
} 