// componentes/jugar.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function BotonJugar() {
  const router = useRouter();

  const manejarClick = () => {
    router.push('/juego');
  };

  return (
    <button
      onClick={manejarClick}
      className="px-6 py-3 bg-indigo-600 text-black font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
    >
      Comenzar el juego
    </button>
  );
}

