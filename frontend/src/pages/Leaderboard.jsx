import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Leaderboard = () => {
  const params = useParams();
  const url = import.meta.env.VITE_BACKEND_URL + "leaderboard/" + params.mapId;
  const [ranking, setRanking] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url).then((res) => res.json());
      return response;
    }
    setRanking(getData());
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setRanking(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((record) => (
            <tr key={record.id}>
              <td>{record.username}</td>
              <td>{record.timeSeconds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Leaderboard;
