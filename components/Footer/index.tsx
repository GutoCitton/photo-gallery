import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white flex items-center justify-center px-6 py-3">
      <nav>
        <ul className="flex items-center justify-center gap-2">
          <li>
            <Link href="">Footer</Link>
          </li>
          <li>
            <Link href="/galery">Footer</Link>
          </li>
          <li>
            <Link href="/perfil">Footer</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
