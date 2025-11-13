import targetController from "../controllers/targetController.js";
import attachSession from "../lib/attachSession.js";
import { Router } from "express";
const targetRouter = Router();

targetRouter.post("/", attachSession, targetController.validate);

export default targetRouter;
