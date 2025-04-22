// app/layout.tsx
import './globals.css';
import Header from './componentes/header';

export const metadata = {
  title: 'PROJECTE Memory',
  description: 'Joc de memòria amb Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body>
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
