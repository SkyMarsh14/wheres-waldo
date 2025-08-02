import targetController from "../controllers/targetController.js";
import { Router } from "express";
const targetRouter = Router();

targetRouter.post("/", targetController.validate);

export default targetRouter;
