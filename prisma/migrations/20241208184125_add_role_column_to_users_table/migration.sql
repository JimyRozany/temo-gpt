/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `isAdmin`,
    ADD COLUMN `role` ENUM('ADMIN', 'READER', 'CHATTING') NOT NULL DEFAULT 'READER';
