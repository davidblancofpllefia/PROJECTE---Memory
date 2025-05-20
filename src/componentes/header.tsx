'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-light border-bottom mb-4">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link href="/home" className="text-decoration-none text-primary fw-bold fs-4">
          PROJECTE Memory
        </Link>
        <nav>
          <Link href="/home" className="mx-3 text-dark text-decoration-none">
            Inici
          </Link>
          <Link href="/juego" className="mx-3 text-dark text-decoration-none">
            Joc
          </Link>
          <Link href="/acerca" className="mx-3 text-dark text-decoration-none">
            Sobre nosaltres
          </Link>
        </nav>
      </div>
    </header>
  );
}

