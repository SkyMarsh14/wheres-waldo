import sessionStorage from "./sessionStorage.js";
class SessionManager {
  addSession() {
    const sessionId = crypto.randomUUID();
    sessionStorage.push({
      sessionId,
    });
    return sessionId;
  }
  findSession(sessionId) {
    const index = sessionStorage.findIndex(
      (item) => item.sessionId === sessionId
    );
    if (index === -1) {
      console.error(`No session found: ${sessionId}`);
    }
    return index;
  }
  setStartTime(sessionId) {
    sessionStorage[this.findSession(sessionId)].startTime = new Date();
  }
  setEndTime(sessionId) {
    sessionStorage[this.findSession(sessionId)].endTime = new Date();
  }
  getResult(sessionId) {
    const index = this.findSession(sessionId);
    return sessionStorage[index].endTime - sessionStorage[index].startTime;
  }
}

const sessionManager = new SessionManager();
export default sessionManager;
