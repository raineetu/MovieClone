import React from "react";
import useFetch from "../hooks/useFetch";

const DisplayMovie = () => {
  const { data, loading, error } = useFetch();

  return (
    <div>
      {loading && <p>Loading movies...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data?.results?.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Popular Movies:</h2>
          {data.results.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default DisplayMovie;
