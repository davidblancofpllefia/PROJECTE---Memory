"use client";

interface TarjetaProps {
  nombre: string;
  imagen: string;
  girada: boolean;
  emparejada: boolean;
  onClick: () => void;
}

export function Tarjeta({ nombre, imagen, girada, onClick, emparejada }: TarjetaProps) {
  return (
    <div
      className={`w-24 h-32 shadow-lg cursor-pointer select-none rounded-lg overflow-hidden bg-gray-900
        transition-transform duration-300 ease-in-out
        ${!girada && !emparejada ? "hover:scale-105" : ""}
      `}
      onClick={onClick}
    >
      <div className="w-full h-20 flex items-center justify-center bg-gray-800">
        {girada || emparejada ? (
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-full object-contain"
            draggable={false}
          />
        ) : (
          <img
            src="https://images.seeklogo.com/logo-png/8/2/marvel-comics-logo-png_seeklogo-88891.png"
            alt="back card"
            className="max-h-full"
            draggable={false}
          />
        )}
      </div>
      <div className="text-center text-xs mt-1 font-semibold text-white select-none">
        {girada || emparejada ? nombre : "???"}
      </div>
    </div>
  );
}
