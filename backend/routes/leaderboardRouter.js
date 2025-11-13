import leaderboardController from "../controllers/leaderboardController.js";
import { Router } from "express";
import attachSession from "../lib/attachSession.js";
const leaderboardRouter = Router();

leaderboardRouter.post("/", attachSession, leaderboardController.add);
leaderboardRouter.get("/:mapId", leaderboardController.get);
export default leaderboardRouter;
