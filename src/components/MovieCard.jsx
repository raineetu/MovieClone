import React from "react";
import { Star, Calendar, Globe } from "lucide-react"; // Importing icons

const MovieCard = ({
  movie: { title, poster_path, vote_average, release_date, original_language },
}) => {
  return (
    <div className="movie-card p-4 border rounded-lg shadow-md bg-gray-900 text-white transition transform hover:scale-95 hover:shadow-xl">
      {/* Movie Poster */}
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        className="w-full h-[300px] rounded-md object-cover"
      />

      {/* Movie Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

        {/* Rating & Release Date */}
        <div className="flex gap-4 mt-2 items-center">
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={18} />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-300">
            <Calendar size={18} />
            <span>{release_date || "Unknown"}</span>
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center gap-1 mt-2 text-gray-300">
          <Globe size={18} />
          <span>{original_language?.toUpperCase() || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
