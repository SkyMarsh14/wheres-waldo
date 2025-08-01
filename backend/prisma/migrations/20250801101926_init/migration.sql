-- CreateTable
CREATE TABLE "public"."Target" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "coordinateX" INTEGER NOT NULL,
    "coordinateY" INTEGER NOT NULL,
    "mapId" INTEGER NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Map" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Target_name_key" ON "public"."Target"("name");

-- AddForeignKey
ALTER TABLE "public"."Target" ADD CONSTRAINT "Target_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "public"."Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
