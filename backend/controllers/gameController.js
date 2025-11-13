import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const gameController = {
  start: async (req, res) => {
    const targetData = await prisma.target.findMany({
      where: {
        mapId: req.session.mapId,
      },
      select: {
        id: true,
        name: true,
        url: true,
      },
    });
    const mapData = await prisma.map.findUnique({
      where: {
        id: req.session.mapId,
      },
    });
    res.json({ sessionId: req.session.id, targetData, mapData });
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
        const targetsLeft = sessionManager.removeRemainingTarget(
          req.session.id,
          target.id
        );
        if (targetsLeft.size == 0) {
          return res.json({
            message: `You have found all the targets!`,
            corret: true,
            clear: true,
          });
        }
        return res.json({
          message: `You have found ${target.name}!`,
          correct: true,
          clear: false,
        });
      }
    }
  },
};

export default gameController;
