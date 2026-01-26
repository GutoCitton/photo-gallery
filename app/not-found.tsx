import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-6xl">
        Página não encontrada 404
      </h1>
      <p>A página que está tentando acessar não existe!</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
