/*
  Warnings:

  - You are about to drop the column `rsena` on the `Noticias` table. All the data in the column will be lost.
  - Added the required column `autor` to the `Noticias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resena` to the `Noticias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Noticias` DROP COLUMN `rsena`,
    ADD COLUMN `autor` VARCHAR(191) NOT NULL,
    ADD COLUMN `resena` VARCHAR(191) NOT NULL;
