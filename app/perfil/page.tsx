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


const Perfil = async () => {
    const stories = await getTopStories();
return (
    <div className="min-h-screen">
        <div className="ml-[6%] mt-5 bg-white size-35 rounded-full flex items-center justify-center absolute">
            <span className="text-white">FOTO</span>
        </div>
        <div className="bg-black max-w-[90%] mx-auto h-45 flex items-center justify-center">
          <h1 className="text-white text-center">CAPA DO PERFIL</h1>
        </div>
        <div className="max-w-[90%] mx-auto h-20 flex items-center justify-center mt-10">
            <h1 className="text-white text-[30px] font-bold">FOTOS DISTAQUES</h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-10 max-w-[80%] mx-auto">
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
)
}

export default Perfil;