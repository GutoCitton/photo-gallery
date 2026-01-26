import FotoGalery from "@/components/FotoGalery";

const Galery = () => {
  return (
    <div className="mx-auto max-w-[80%]">
      <h1 className="font-bold text-[30px] text-center text-gray-100">
        GALERIA DE FOTOS
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-6 flex">
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
        <FotoGalery />
      </div>
    </div>
  );
};

export default Galery;
