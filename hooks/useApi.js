import { useState, useEffect } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;
const API_AUTH = process.env.NEXT_PUBLIC_API_AUTH;

export default function useApi(endpoint, method = "GET") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
          method,
          headers: {
            Auth: API_AUTH,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method]);
  return { data, error, loading };
}
