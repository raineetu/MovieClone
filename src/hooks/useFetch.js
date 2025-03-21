import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endpoint = `${API_URL}?api_key=${API_KEY}&sort_by=popularity.desc`;
        // console.log(endpoint);
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log(result);
        setData(result.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
