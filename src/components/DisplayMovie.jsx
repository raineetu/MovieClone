import React from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";

const DisplayMovie = ({ searchItem }) => {
  const { data, loading, error } = useFetch(""); // Fetch all movies initially

  // Filter movies based on the searchItem input
  const filteredMovies = data?.results?.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center my-4">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="ml-2">Loading movies...</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {filteredMovies?.length > 0 ? (
        <div className="mt-8 movieSection container">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-white text-lg">No movies found.</p>
      )}
    </div>
  );
};

export default DisplayMovie;
