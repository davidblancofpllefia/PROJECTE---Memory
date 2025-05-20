import BotonJugar from "../../componentes/jugar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 drop-shadow">
          ¡Bienvenido al Memory!
        </h1>
        <BotonJugar />
      </div>
    </div>
  );
}
