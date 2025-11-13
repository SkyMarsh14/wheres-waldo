import prisma from "../db/prisma.js";
class SessionManager {
  constructor() {
    this.sessions = new Map();
  }
  createSession(sessionId = crypto.randomUUID()) {
    this.sessions.set(sessionId, {
      startTime: null,
      endTime: null,
      resultTime: null,
      found: new Set(),
      cleared: false,
    });
    return sessionId;
  }
  get(sessionId) {
    return this.sessions.get(sessionId) ?? null;
  }
  setStartTime(sessionId) {
    const session = this.get(sessionId);
    if (!session) return false;
    session.startTime = session.startTime ?? Date.now();
  }
  setEndTime(sessionId) {
    const session = this.get(sessionId);
    if (!session) return false;
    session.endTime = session.endTime ?? Date.now();
    session.resultTime = session.endTime - session.startTime;
  }
  async addFoundTarget(sessionId, mapId, targetId) {
    const session = this.get(sessionId);
    const targets = await prisma.target.findMany({
      where: {
        mapId: mapId,
      },
      select: {
        id: true,
      },
    });
    if (session.found.has(targetId)) {
      throw new Error("The selected target has already been found.");
    }
    session.found.add(targetId);
    if (targets.length == session.found.size) {
      session.cleared = true;
    }
  }
}

const sessionManager = new SessionManager();
export default sessionManager;
