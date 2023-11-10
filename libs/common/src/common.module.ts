import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import configService from './database/ormconfig.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig('ms_auth'))
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
