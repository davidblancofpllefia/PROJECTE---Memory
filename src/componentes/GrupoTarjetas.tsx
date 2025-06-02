import { useEffect, useState } from "react";
import { Tarjeta } from "./tarjeta";
import { tarjetaPrueba } from "@/bd/bd";

type Carta = {
  nombre: string;
  imagen: string;
};

function mezclarArray(array: Carta[]) {
  return array
    .map(valor => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map(obj => obj.valor);
}

export function GrupoTarjetas() {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [giradas, setGiradas] = useState<number[]>([]);
  const [emparejadas, setEmparejadas] = useState<number[]>([]);

  useEffect(() => {
    const cartasDuplicadas = [...tarjetaPrueba, ...tarjetaPrueba];
    setCartas(mezclarArray(cartasDuplicadas));
  }, []);

  function handleClick(index: number) {
    if (giradas.length === 2 || giradas.includes(index) || emparejadas.includes(index)) return;

    const nuevasGiradas = [...giradas, index];
    setGiradas(nuevasGiradas);

    if (nuevasGiradas.length === 2) {
      const [primero, segundo] = nuevasGiradas;
      if (cartas[primero].nombre === cartas[segundo].nombre) {
        setEmparejadas(prev => [...prev, primero, segundo]);
        setGiradas([]);
      } else {
        setTimeout(() => setGiradas([]), 1000);
      }
    }
  }

  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      {cartas.map((carta, index) => (
        <Tarjeta
          key={index}
          nombre={carta.nombre}
          imagen={carta.imagen}
          girada={giradas.includes(index) || emparejadas.includes(index)}
          emparejada={emparejadas.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </section>
  );
}
