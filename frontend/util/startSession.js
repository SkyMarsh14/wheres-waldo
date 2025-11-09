async function startSession() {
  localStorage.clear("sessionId"); // Prevents old session to be continued.
  const response = await fetch(
    import.meta.env.VITE_BACKEND_URL + "game/startSession"
  ).then((response) => response.json());
  localStorage.setItem("sessionId", response.sessionId);
}
export default startSession;
