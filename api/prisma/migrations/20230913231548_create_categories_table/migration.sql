/*
  Warnings:

  - You are about to drop the column `userId` on the `bank_account` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `bank_account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENSE');

-- DropForeignKey
ALTER TABLE "bank_account" DROP CONSTRAINT "bank_account_userId_fkey";

-- AlterTable
ALTER TABLE "bank_account" DROP COLUMN "userId",
ADD COLUMN     "user_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "category" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" "transaction_type" NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
