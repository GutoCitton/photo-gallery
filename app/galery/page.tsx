import FotoGalery from "@/components/FotoGalery";
import type { NYTStory } from "@/types/nyt";

const getTopStories = async (): Promise<NYTStory[]> => {
  const res = await fetch("http://localhost:3000/api/nyt", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar Top Stories");
  }

  const data = await res.json();
  return data.results as NYTStory[];
};

const Galery = async () => {
  const stories = await getTopStories();

  return (
    <div className="mx-auto max-w-[80%] py-8">
      <h1 className="font-bold text-[30px] text-center text-gray-100">
        GALERIA DE FOTOS
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {stories.slice(0, 8).map((story) => (
          <FotoGalery
            key={story.url}
            title={story.title}
            description={story.abstract}
            imageUrl={story.multimedia?.[0]?.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Galery;
