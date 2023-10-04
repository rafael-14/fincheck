-- DropForeignKey
ALTER TABLE "bank_account" DROP CONSTRAINT "bank_account_userId_fkey";

-- AddForeignKey
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
