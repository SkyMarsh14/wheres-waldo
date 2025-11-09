import sessionManager from "../lib/sessionManager.js";
const gameController = {
  startSession: async (req, res) => {
    const sessionId = sessionManager.addSession();
    sessionManager.setStartTime(sessionId);
    res.json({ sessionId: sessionId });
  },
  endSession: async (req, res) => {},
};

export default gameController;
