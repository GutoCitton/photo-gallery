import Image from "next/image";
import volei from "@/app/assets/volei.jpg";

const FotoGalery = () => {
  return (
    <div className="w-80 h-80 bg-amber-50">
      <h4 className="font-bold text-[18px] text-center text-gray-900">
        Foto Name
      </h4>
      <Image
        src={volei}
        alt="Foto"
        width={500}
        height={500}
        className="rounded-[7px]"
      />
      <p
        className="text-gray-900
          text-[14px]
          p-1
          overflow-hidden  
          line-clamp-2
          flex-grow
          text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos
        nihil et. Nihil, dolorem voluptatem.
      </p>
    </div>
  );
};

export default FotoGalery;
