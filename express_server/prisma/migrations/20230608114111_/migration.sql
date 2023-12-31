-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('Local', 'Google', 'Kakao');

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('Earned', 'Spent');

-- CreateEnum
CREATE TYPE "Method" AS ENUM ('Watched_Data', 'Watched_Daily_Species1', 'Watched_Daily_Species2', 'Watched_Daily_Species3', 'Watched_Daily_Species4', 'Participation', 'Quiz', 'Watched_Video', 'Joined_Campaign1', 'Joined_Campaign2', 'Joined_Campaign3', 'Draw_Degree1', 'Draw_Degree2');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "provider" "Provider" NOT NULL DEFAULT 'Local',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "animal_id" INTEGER NOT NULL,
    "collected_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointsLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "action_type" "ActionType" NOT NULL DEFAULT 'Earned',
    "method" "Method" NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PointsLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Collection_userId_idx" ON "Collection"("userId");

-- CreateIndex
CREATE INDEX "PointsLog_userId_event_date_idx" ON "PointsLog"("userId", "event_date");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointsLog" ADD CONSTRAINT "PointsLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
