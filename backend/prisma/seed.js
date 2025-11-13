import { PrismaClient } from "../generated/prisma/default.js";
const prisma = new PrismaClient();

async function main() {
  console.log("Starts seeding...");
  const pokemonMap = await prisma.map.create({
    data: {
      name: "Pokemon Map",
      url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1762930413/pokemon_uy1nqb.jpg",
    },
  });
  const pokemonTargets = await prisma.target.createMany({
    data: [
      {
        name: "Psyduck",
        coordinateX: 22,
        coordinateY: 50,
        mapId: pokemonMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1762930562/psyduckImg_sj54kb.png",
      },
      {
        name: "Meowth",
        coordinateX: 45,
        coordinateY: 15,
        mapId: pokemonMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1762930561/meowthImg_qfqt2z.png",
      },
      {
        name: "Shellder",
        coordinateX: 70,
        coordinateY: 91,
        mapId: pokemonMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1762930563/shellderImg_entfif.png",
      },
    ],
  });
  const inTownMap = await prisma.map.create({
    data: {
      name: "In Town",
      url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763032554/inTown_beip8x.jpg",
    },
  });
  const inTownTargets = await prisma.target.createMany({
    data: [
      {
        name: "Waldo",
        coordinateX: 43,
        coordinateY: 76,
        mapId: inTownMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763037416/waldo_qyyrgo.jpg",
      },
      {
        name: "Odlaw",
        coordinateX: 59,
        coordinateY: 94,
        mapId: inTownMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763037415/odlaw_wravdx.jpg",
      },
      {
        name: "Woof",
        coordinateX: 57,
        coordinateY: 32,
        mapId: inTownMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763037414/woof_zvcw9w.jpg",
      },
      {
        name: "Wizard Whitebeard",
        coordinateX: 65,
        coordinateY: 77,
        mapId: inTownMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763037415/wizardWhiteBeard_aif6wo.jpg",
      },
      {
        name: "Wenda",
        coordinateX: 44,
        coordinateY: 61,
        mapId: inTownMap.id,
        url: "https://res.cloudinary.com/dzor53b0k/image/upload/v1763037415/wenda_zgbcuc.jpg",
      },
    ],
  });
  const leaderboard = await prisma.leaderboard.createMany({
    data: [
      { username: "ShadowFox", mapId: pokemonMap.id, timeSeconds: 95.32 },
      { username: "CyberMage", mapId: pokemonMap.id, timeSeconds: 88.47 },
      { username: "NeonWolf", mapId: pokemonMap.id, timeSeconds: 120.76 },
      { username: "BitRunner", mapId: pokemonMap.id, timeSeconds: 97.43 },
      { username: "DataGhost", mapId: pokemonMap.id, timeSeconds: 112.21 },
      { username: "SpiritSeeker", mapId: pokemonMap.id, timeSeconds: 130.55 },
      { username: "LeafWhisper", mapId: pokemonMap.id, timeSeconds: 125.2 },
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
