import React from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";
import useSearch from "../hooks/useSearch";

const MovieList = ({ searchItem }) => {
  const { data, loading, error } = useFetch("/movie/popular");
  const { isPending, filteredMovies } = useSearch(data, searchItem);

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-4">Movies List</h1>

      {/* Loading spinner */}
      {loading && (
        <div className="flex items-center justify-center my-4">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="ml-2">Loading movies...</p>
        </div>
      )}

      {/* Error message */}
      {error && <p className="text-red-400 text-center">{error}</p>}

      {/* Show pending state if transition is in progress */}
      {isPending && (
        <p className="text-gray-400 text-center">Updating list...</p>
      )}

      {/* Display filtered movies */}
      {filteredMovies?.length > 0 ? (
        <div className="mt-8 movieSection container">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        !loading && <p className="text-white text-lg">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
