// app/layout.tsx
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../componentes/header';

export const metadata = {
  title: 'Proyecto Memory',
  description: 'Juego de memoria con Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Header /> 
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

