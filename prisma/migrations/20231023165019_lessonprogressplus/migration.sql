/*
  Warnings:

  - A unique constraint covering the columns `[lessonId,userEmail]` on the table `LessonProgress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `LessonProgress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "LessonProgress_lessonId_key";

-- AlterTable
ALTER TABLE "LessonProgress" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LessonProgress_lessonId_userEmail_key" ON "LessonProgress"("lessonId", "userEmail");
