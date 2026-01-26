import Image from "next/image";

type FotoGaleryProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const FotoGalery = ({
  title,
  description,
  imageUrl,
}: FotoGaleryProps) => {
  return (
    <div className="w-80 h-[330px] bg-amber-50 rounded-lg p-3 flex flex-col gap-2">
      <h4 className="font-bold text-[16px] text-center text-gray-900 line-clamp-2">
        {title}
      </h4>

      {/* Container fixo da imagem */}
      <div className="relative w-full h-48 overflow-hidden rounded-md">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="320px"
          />
        )}
      </div>

      <p className="text-gray-900 text-[14px] line-clamp-3 text-center mt-auto">
        {description}
      </p>
    </div>
  );
};

export default FotoGalery;
