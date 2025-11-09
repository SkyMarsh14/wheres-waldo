import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const gameController = {
  startSession: async (req, res) => {
    const sessionId = sessionManager.addSession();
    sessionManager.setStartTime(sessionId);
    res.json({ sessionId: sessionId });
  },
  endSession: async (req, res) => {
    sessionManager.setEndTime(req.headers.authorization);
    const result = sessionManager.getResult(req.headers.authorization);
    res.json({
      time: result,
      msg: "Congratulation",
    });
  },
};

export default gameController;
