import express from "express";
import "dotenv/config";
import cors from "cors";
import targetRouter from "./routes/targetRouter.js";
import gameRouter from "./routes/gameRouter.js";
import leaderboardRouter from "./routes/leaderboardRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/target", targetRouter);
app.use("/game", gameRouter);
app.use("/leaderboard", leaderboardRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app started - listening on port ${PORT}.`);
});
