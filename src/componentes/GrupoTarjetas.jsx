import { Tarjeta } from "@/componentes/tarjeta"
import { tarjetaPrueba } from "@/bd/bd"


export function GrupoTarjetas({ desactivado = false }) {
  return (
    <section className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 justify-items-center ${desactivado ? 'pointer-events-none opacity-50' : ''}`}>
      {tarjetaPrueba.map((t, i) => (
        <Tarjeta key={i} nombre={t.nombre} imagen={t.imagen} />
      ))}
    </section>
  );
}

