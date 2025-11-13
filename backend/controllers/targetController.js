import prisma from "../db/prisma.js";

const targetController = {
  validate: async (req, res) => {
    const mapId = req.session.mapId;
    const coordinateX = Number(req.body.coordinateX);
    const coordinateY = Number(req.body.coordinateY);
    const target = await prisma.target.findFirst({
      where: {
        mapId: mapId,
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
        return res.json({
          message: `You have found ${target.name}!`,
          correct: true,
        });
      }
    }
    res.json({ message: "Incorrect! Take another guess.", correct: false });
  },
};
export default targetController;
