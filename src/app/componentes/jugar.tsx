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
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Comenzar el juego
    </button>
  );
}
