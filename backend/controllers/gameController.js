import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const gameController = {
  start: async (req, res) => {
    const mapData = await prisma.map.findUnique({
      where: {
        id: req.session.mapId,
      },
      include: {
        targets: true,
      },
    });
    res.jsoon({ sessionId: req.session.id, mapData });
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
