import gameController from "../controllers/gameController.js";
import { Router } from "express";
import sessionManager from "../lib/attachSession.js";
const gameRouter = Router();
gameRouter.get("/start/:mapId", sessionManager, gameController.start);
gameRouter.get("/endSession", gameController.endSession);
export default gameRouter;
