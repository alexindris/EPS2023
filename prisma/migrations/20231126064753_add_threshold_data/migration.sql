-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "lightThresholdMax" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "lightThresholdMin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "soilHumidityThresholdMax" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "soilHumidityThresholdMin" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "temperatureThresholdMax" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "temperatureThresholdMin" INTEGER NOT NULL DEFAULT 0;
