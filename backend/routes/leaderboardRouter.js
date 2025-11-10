import leaderboardController from "../controllers/leaderboardController.js";
import { Router } from "express";
const leaderboardRouter = Router();

leaderboardRouter.post("/", leaderboardController.add);
leaderboardRouter.get("/:mapId", leaderboardController.get);
export default leaderboardRouter;
