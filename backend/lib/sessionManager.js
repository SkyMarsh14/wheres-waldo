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
    return sessionStorage.findIndex((item) => item.sessionId == sessionId);
  }
  setStartTime(sessionId) {
    sessionStorage[this.findSession(sessionId)].startTime = new Date();
  }
  setEndTime(sessionId) {
    sessionStorage[findSEssion(sessionId)].endTime = new Date();
  }
}

const sessionManager = new SessionManager();
export default sessionManager;
