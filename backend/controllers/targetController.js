import prisma from "../db/prisma";
const targetController = {
  validate: async (req, res) => {
    const { mapId, target, coordX, coordY } = req.body;
    const coords = await prisma.target.findFirst({
      where: {
        mapId,
        name: target,
      },
    });
    if (coords.coordinateX + 5 > coordX > coords.coordinateX - 5) {
      if (coords.coordinateY + 5 > coordY > coords.coordinateY - 5) {
        res.json({ message: `Good guess! You have found ${target}!` });
      }
    }
    res.json({ message: "Incorrect! Take another guess." });
  },
};
export default targetController;
