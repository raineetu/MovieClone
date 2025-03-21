import { useEffect, useState, useTransition } from "react";

const useSearch = (data, searchItem) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setFilteredMovies(
        data?.filter((movie) =>
          movie?.title
            ?.toLowerCase()
            ?.includes((searchItem || "").toLowerCase())
        ) || []
      );
    });
  }, [searchItem, data]);

  return { filteredMovies, isPending };
};

export default useSearch;
