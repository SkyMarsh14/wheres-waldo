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
        name: true,
        url: true,
      },
    });
    targets.forEach((t, index) => {
      targets[index] = { ...t, found: false }; // Add found status to the original array.
    });
    this.sessions.set(sessionId, {
      startTime: new Date(),
      endTime: null,
      resultTime: null,
      targets: [...targets],
      mapId: Number(mapId),
    });
    return {
      id: sessionId,
      ...this.get(sessionId),
    };
  }
  get(sessionId) {
    return this.sessions.get(sessionId) ?? null;
  }
  setEndTime(sessionId) {
    const session = this.get(sessionId);
    if (!session) return false;
    session.endTime = session.endTime ?? new Date();
    session.resultTime = session.endTime - session.startTime;
  }
  async updateTargetFoundStatus(sessionId, targetId) {
    const session = this.get(sessionId);
    const index = session.targets.findIndex((e) => e.id == targetId);
    if (session.targets[index].found) {
      throw new Error(`The target has already been found.`);
    }
    session.targets[index].found = true;
    if (session.targets.every((element) => element.found == true)) {
      session.endTime = new Date();
      session.resultTime = session.endTime - session.startTime;
    }
    return session.targets;
  }
}

const sessionManager = new SessionManager();
export default sessionManager;
