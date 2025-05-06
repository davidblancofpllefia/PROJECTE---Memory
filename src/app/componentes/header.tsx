
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          PROJECTE Memory
        </Link>

        <nav className="space-x-6">
          <Link
            href="/home"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Inici
          </Link>
          <Link
            href="/juego"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Joc
          </Link>
          <Link
            href="/acerca"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Sobre nosaltres
          </Link>
        </nav>
      </div>
    </header>
  );
}


