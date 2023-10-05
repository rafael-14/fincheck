import { Module } from '@nestjs/common';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoriesModule } from '../categories/categories.module';
import { TransactionsService } from './services/transactions.service';
import { ValidateTransactionOwnershipService } from './services/validate-transaction-ownership.service';
import { TransactionsController } from './transactions.controller';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnershipService],
  imports: [BankAccountsModule, CategoriesModule],
})
export class TransactionsModule {}
