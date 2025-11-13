import prisma from "../db/prisma.js";
class SessionManager {
  constructor() {
    this.sessions = new Map();
  }
  async createSession(mapId, sessionId = crypto.randomUUID()) {
    const targets = await prisma.target.findMany({
      where: {
        mapId: Number(mapId),
      },
      select: {
        id: true,
      },
    });
    this.sessions.set(sessionId, {
      startTime: null,
      endTime: null,
      resultTime: null,
      notFound: targets,
      mapId,
    });
    return sessionId;
  }
  get(sessionId) {
    return this.sessions.get(sessionId) ?? null;
  }
  setStartTime(sessionId) {
    const session = this.get(sessionId);
    if (!session) return false;
    session.startTime = session.startTime ?? new Date();
  }
  setEndTime(sessionId) {
    const session = this.get(sessionId);
    if (!session) return false;
    session.endTime = session.endTime ?? new Date();
    session.resultTime = session.endTime - session.startTime;
  }
  async removeRemainingTarget(sessionId, targetId) {
    const session = this.get(sessionId);
    if (!session.has(targetId)) {
      throw new Error("This target has already been found.");
    }
    session.notFound.delete(targetId);
    return session.notFound;
  }
}

const sessionManager = new SessionManager();
export default sessionManager;
