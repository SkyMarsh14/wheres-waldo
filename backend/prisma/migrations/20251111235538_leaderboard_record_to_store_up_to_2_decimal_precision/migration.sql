/*
  Warnings:

  - You are about to alter the column `timeSeconds` on the `Leaderboard` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "public"."Leaderboard" ALTER COLUMN "timeSeconds" SET DATA TYPE DECIMAL(10,2);
