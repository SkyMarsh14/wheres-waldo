import { useState, useEffect } from "react";

function useGet(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("sessionId"),
          },
        });
        if (!req.ok) {
          throw new Error(`Sever error:${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, error, loading };
}
export default useGet;
