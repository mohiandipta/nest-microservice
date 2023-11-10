import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import configService from '@app/common/database/ormconfig.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('ms_billing'))
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
