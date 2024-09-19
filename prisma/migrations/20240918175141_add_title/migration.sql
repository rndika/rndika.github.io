/*
  Warnings:

  - Made the column `anime_title` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `anime_title` VARCHAR(191) NOT NULL;
