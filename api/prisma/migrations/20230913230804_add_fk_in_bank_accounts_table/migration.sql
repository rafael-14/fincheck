-- AddForeignKey
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
