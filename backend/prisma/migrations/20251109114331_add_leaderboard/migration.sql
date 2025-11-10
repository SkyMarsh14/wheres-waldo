/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Session";

-- CreateTable
CREATE TABLE "public"."Leaderboard" (
    "id" SERIAL NOT NULL,
    "timeSeconds" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "mapId" INTEGER NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leaderboard_mapId_username_key" ON "public"."Leaderboard"("mapId", "username");

-- AddForeignKey
ALTER TABLE "public"."Leaderboard" ADD CONSTRAINT "Leaderboard_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "public"."Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
