import gameController from "../controllers/gameController.js";
import { Router } from "express";
import attachSession from "../lib/attachSession.js";
const gameRouter = Router();
gameRouter.get("/start/:mapId", attachSession, gameController.start);
gameRouter.post("/guess/:mapId", attachSession, gameController.guess);
export default gameRouter;
