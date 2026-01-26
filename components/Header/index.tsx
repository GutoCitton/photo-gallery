import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex px-2 py-4 bg-zinc-900 text-white">
      <Link
        href="/"
        className="flex items-center justify-between w-full mx-auto max-w-7xl"
      >
        PhotoProject
      </Link>

      <nav>
        <ul className="flex items-center justify-center gap-5 mr-30">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/galery">Galeria</Link>
          </li>
          <li>
            <Link href="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
