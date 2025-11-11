import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const leaderboardController = {
  add: async (req, res) => {
    const time = sessionManager.getResult(req.headers.authorization);
    const formattedTime = Math.round(time / 10) / 100; // Stores seconds up to two decimal point
    const mapId = Number(req.body.mapId);
    const username = req.body.username;
    const exisitingRecord = await prisma.leaderboard.findUnique({
      where: {
        mapId_username: {
          username,
          mapId,
        },
      },
    });
    if (exisitingRecord) {
      if (formattedTime > exisitingRecord.timeSeconds) {
        res.json({
          msg: "Better record with the same username already exist.",
        });
      }
    }
    const record = await prisma.leaderboard.upsert({
      where: {
        mapId_username: {
          mapId,
          username,
        },
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
    res.json(record);
  },
  get: async (req, res) => {
    const mapId = Number(req.params.mapId);
    const data = await prisma.leaderboard.findMany({
      where: {
        mapId,
      },
      orderBy: { timeSeconds: "asc" },
    });
    res.json(data);
  },
};
export default leaderboardController;
