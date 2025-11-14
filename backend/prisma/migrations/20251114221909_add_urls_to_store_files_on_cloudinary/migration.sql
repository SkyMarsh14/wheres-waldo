/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Map` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mapId,name]` on the table `Target` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Map` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Target_name_key";

-- AlterTable
ALTER TABLE "public"."Map" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Target" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Map_url_key" ON "public"."Map"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Target_mapId_name_key" ON "public"."Target"("mapId", "name");
