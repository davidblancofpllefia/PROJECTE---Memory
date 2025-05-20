export default function Acerca() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold mb-6 border-b pb-2 border-gray-300">
          Sobre Memory Game
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Memory Game es un juego educativo para mejorar la concentración y la memoria visual.  
          Desarrollado con Next.js, muestra buenas prácticas de diseño y componentes reutilizables.
        </p>
        <p className="text-lg leading-relaxed">
          El reto: emparejar todas las cartas con el menor número de movimientos.
        </p>
        <p className="mt-10 text-sm text-gray-500">
          Proyecto desarrollado por David Blanco - 2025
        </p>
      </div>
    </div>
  );
}

