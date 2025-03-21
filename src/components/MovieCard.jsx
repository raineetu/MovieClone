import React from "react";

const MovieCard = ({
  movie: { title, poster_path, vote_average, release_date, original_language },
}) => {
  return (
    <div className="movie-card p-4 border rounded-lg shadow-md">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        className="w-full h-[300px] rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-4">
          <p className="text-gray-600">
            ⭐ {vote_average ? vote_average.toFixed(1) : "N/A"}
          </p>
          <p className="text-sm text-gray-500">
            📅 {release_date || "Unknown"}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          🌍{original_language?.toUpperCase() || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
