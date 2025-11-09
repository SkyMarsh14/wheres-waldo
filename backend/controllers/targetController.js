import prisma from "../db/prisma.js";
const targetController = {
  validate: async (req, res) => {
    const mapId = Number(req.body.mapId);
    const name = req.body.name;
    const coordinateX = Number(req.body.coordinateX);
    const coordinateY = Number(req.body.coordinateY);
    const coords = await prisma.target.findFirst({
      where: {
        mapId: mapId,
        name,
      },
    });
    if (
      coordinateX > coords.coordinateX - 5 &&
      coordinateX < coords.coordinateX + 5
    ) {
      if (
        coordinateY > coords.coordinateY - 5 &&
        coordinateY < coords.coordinateY + 5
      ) {
        return res.json({ message: `You have found ${name}!`, correct: true });
      }
    }
    res.json({ message: "Incorrect! Take another guess.", correct: false });
  },
};
export default targetController;
