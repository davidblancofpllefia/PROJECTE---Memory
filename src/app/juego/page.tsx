import BotonJugar from "../componentes/jugar";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenido al juego de memoria</h1>
      <BotonJugar />
    </div>
  );
}
