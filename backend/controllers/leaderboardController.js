import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const leaderboardController = {
  add: async (req, res) => {
    const time = sessionManager.getResult(req.headers.authorization);
    const formattedTime = Math.round(time / 1000);
    const mapId = Number(req.body.mapId);
    const username = req.body.username;
    const record = await prisma.leaderboard.upsert({
      where: {
        mapId,
        username,
      },
      update: {
        timeSeconds: formattedTime,
      },
      create: {
        username,
        mapId,
        timeSeconds: formattedTime,
      },
    });
  },
  get: async (req, res) => {
    const mapId = Number(req.params.mapId);
    const data = await prisma.leaderboard.findMany({
      where: {
        mapId,
      },
      orderBy: { timeSeconds: "desc" },
    });
    res.json(data);
  },
};
export default leaderboardController;
