import gameController from "../controllers/gameController.js";
import { Router } from "express";
const gameRouter = Router();

gameRouter.get("/startSession", gameController.startSession);

export default gameRouter;
