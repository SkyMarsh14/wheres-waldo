import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
const Tr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;
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
      <Wrapper>
        <Table>
          <thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Player Name</Th>
              <Th>Time</Th>
            </Tr>
          </thead>
          <tbody>
            {ranking.map((record, index) => (
              <Tr key={record.id}>
                <Td>{index + 1}</Td>
                <Td>{record.username}</Td>
                <Td>{record.timeSeconds}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};
export default Leaderboard;
