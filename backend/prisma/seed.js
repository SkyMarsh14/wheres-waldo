import { PrismaClient } from "../generated/prisma/default.js";
const prisma = new PrismaClient();

async function main() {
  console.log("Starts seeding...");
  const pokemonMap = await prisma.map.create({
    data: {
      name: "Pokemon Map",
    },
  });
  const pokemonTargets = await prisma.target.createMany({
    data: [
      {
        name: "Psyduck",
        coordinateX: 22,
        coordinateY: 50,
        mapId: 1,
      },
      {
        name: "Meowth",
        coordinateX: 45,
        coordinateY: 15,
        mapId: 1,
      },
      {
        name: "Shellder",
        coordinateX: 70,
        coordinateY: 91,
        mapId: 1,
      },
    ],
  });
  console.log("Seeding has completed!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
