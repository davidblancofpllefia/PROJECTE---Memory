import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Tarjeta({ nombre, imagen }) {
  return (
    <Card className="w-40 shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{nombre}</CardTitle>
      </CardContent>
    </Card>
  );
}

