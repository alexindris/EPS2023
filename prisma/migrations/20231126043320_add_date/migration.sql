/*
  Warnings:

  - Added the required column `date` to the `PlantHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PlantHistory` ADD COLUMN `date` DATE NOT NULL;
