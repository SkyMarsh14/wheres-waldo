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
    res.json({ sessionId: req.session.id, mapData });
  },
  guess: async (req, res) => {
    const { targetId, coordinateX, coordinateY } = req.body;
    const target = await prisma.target.findUnique({
      where: {
        id: targetId,
      },
    });
    if (
      coordinateX > target.coordinateX - 5 &&
      coordinateX < target.coordinateX + 5
    ) {
      if (
        coordinateY > target.coordinateY - 5 &&
        coordinateY < target.coordinateY + 5
      ) {
        sessionManager.addFoundTarget(
          req.session.id,
          req.session.mapId,
          target.id
        );
        return res.json({
          message: `You have found ${target.name}!`,
          correct: true,
        });
      }
    }
  },
};

export default gameController;
