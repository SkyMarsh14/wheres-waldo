import { Router } from "express";
import prisma from "../db/prisma.js";
const mapRouter = Router();

mapRouter.get("/all", async (req, res) => {
  const maps = await prisma.map.findMany({});
  return res.json(maps);
});
export default mapRouter;
