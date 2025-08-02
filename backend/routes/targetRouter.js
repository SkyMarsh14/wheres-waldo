import targetController from "../controllers/targetController";
import { Router } from "express";
const targetRouter = Router();

targetRouter.post("/", targetController.validate);

export default targetRouter;
