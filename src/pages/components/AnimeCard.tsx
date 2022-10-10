import Image from "next/image";

const AnimeCard = ({ anime }: { anime: any }) => {
  return (
    <div>
      <Image
        layout="responsive"
        width={200}
        height={300}
        src={anime.coverImage.extraLarge}
        alt={anime.title.userPreferred}
      />
      <div className="text-center mt-1 text-gray-300">
        {anime.title.userPreferred}
      </div>
      <small className="text-center block text-gray-400">
        {anime.episodes} {anime.episodes > 1 ? "episodes" : "episode"}
      </small>
    </div>
  );
};

export default AnimeCard;
