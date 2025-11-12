import sessionManager from "../lib/sessionManager.js";
import prisma from "../db/prisma.js";
const leaderboardController = {
  add: async (req, res) => {
    const time = sessionManager.getResult(req.headers.authorization);
    const seconds = time / 1000;
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
      if (seconds > exisitingRecord.timeSeconds) {
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
        timeSeconds: seconds,
      },
      create: {
        username,
        mapId,
        timeSeconds: seconds,
      },
    });
    res.json(record);
  },
  get: async (req, res) => {
    const mapId = Number(req.params.mapId);
    const record = await prisma.leaderboard.findMany({
      where: {
        mapId,
      },
      orderBy: { timeSeconds: "asc" },
    });
    const map = await prisma.map.findUnique({
      where: {
        id: mapId,
      },
      select: {
        name: true,
      },
    });
    res.json({ record, mapName: map.name });
  },
};
export default leaderboardController;
