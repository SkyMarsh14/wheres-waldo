async function saveSession(sessionId) {
  localStorage.clear("sessionId"); // Prevents old session to be continued.
  localStorage.setItem("sessionId", sessionId);
}
export default saveSession;
